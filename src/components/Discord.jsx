import { useState, useEffect } from 'preact/hooks';

const DiscordStatus = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Preconnect to external resources
        const linkLanyard = document.createElement('link');
        linkLanyard.rel = 'preconnect';
        linkLanyard.href = 'https://api.lanyard.rest';
        document.head.appendChild(linkLanyard);

        const linkDiscord = document.createElement('link');
        linkDiscord.rel = 'preconnect';
        linkDiscord.href = 'https://cdn.discordapp.com';
        document.head.appendChild(linkDiscord);

        const fetchData = async () => {
            try {
                const response = await fetch('https://api.lanyard.rest/v1/users/953083781785464842');
                if (!response.ok) {
                    throw new Error('Error al obtener datos de Discord');
                }
                const result = await response.json();
                setData(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup preconnect tags
        return () => {
            document.head.removeChild(linkLanyard);
            document.head.removeChild(linkDiscord);
        };
    }, []);

    if (loading) return <h1 class="font-bold text-1xl">Cargando...</h1>;
    if (error) return <p>Error: {error}</p>;

    const { discord_user, discord_status } = data;

    return (
        <div className="discord-status flex gap-4 items-center">
            <img
                src={`https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png`}
                alt={`${discord_user.username}'s avatar`}
                class="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full"
            />
            <p class="text-base font-semi">@{discord_user.username}</p>
            <div>
                {discord_status === 'online' && (
                    <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                )}
                {discord_status === 'offline' && (
                    <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                )}
            </div>
        </div>
    );
};

export default DiscordStatus;
