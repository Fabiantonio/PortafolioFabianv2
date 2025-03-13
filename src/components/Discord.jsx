import { useState, useEffect } from "preact/hooks";
import "../styles/loader.css";

const DiscordStatus = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Preconnect to external resources
    const linkLanyard = document.createElement("link");
    linkLanyard.rel = "preconnect";
    linkLanyard.href = "https://api.lanyard.rest";
    document.head.appendChild(linkLanyard);

    const linkDiscord = document.createElement("link");
    linkDiscord.rel = "preconnect";
    linkDiscord.href = "https://cdn.discordapp.com";
    document.head.appendChild(linkDiscord);

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.lanyard.rest/v1/users/953083781785464842"
        );
        if (!response.ok) {
          throw new Error("Error al obtener datos de Discord");
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
    const interval = setInterval(fetchData, 5000); // Ejecutar cada 5 segundos

    // Cleanup preconnect tags
    return () => {
      document.head.removeChild(linkLanyard);
      document.head.removeChild(linkDiscord);
      clearInterval(interval);
    };
  }, []);

  if (loading) return <div class="loader"></div>;
  if (error) return (
    <div class="flex items-center gap-3 p-4">
      <img
        src="/discord-mark-white.svg"
        alt="Discord Logo"
        class="w-10 h-10 opacity-50"
      />
      <p class="text-sm text-gray-500">Unable to fetch Discord status</p>
    </div>
  );

  const { discord_user, discord_status, activities } = data;

  const getStatusColor = (status) => {
    const colors = {
      online: { bg: 'bg-green-500', ping: 'bg-green-400' },
      idle: { bg: 'bg-yellow-500', ping: 'bg-yellow-400' },
      dnd: { bg: 'bg-red-500', ping: 'bg-red-400' },
      offline: { bg: 'bg-gray-500', ping: 'bg-gray-400' }
    };
    return colors[status] || colors.offline;
  };

  const getStatusText = (status) => {
    const texts = {
      online: 'Online',
      idle: 'Idle',
      dnd: 'Do Not Disturb',
      offline: 'Offline'
    };
    return texts[status] || 'Offline';
  };

  const statusColors = getStatusColor(discord_status);

  return (
    <div className="discord-status flex gap-4 items-center p-4 rounded-lg group transition-all duration-300">
      <div class="relative">
        <img
          src={`https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png`}
          alt={`${discord_user.username}'s avatar`}
          class="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full shadow-md group-hover:scale-105 transition-transform duration-300"
        />
        <span class="absolute bottom-0 right-0 flex h-3.5 w-3.5">
          <span class={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusColors.ping} opacity-75`}></span>
          <span class={`relative inline-flex rounded-full h-3.5 w-3.5 ${statusColors.bg} ring-2 ring-white dark:ring-[#1a1a1a]`}></span>
        </span>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center gap-2">
          <p class="text-base font-semibold text-black dark:text-white">
            {discord_user.username}
          </p>
          <span class="text-xs text-gray-500 dark:text-gray-400">
            {getStatusText(discord_status)}
          </span>
        </div>
        {activities?.length > 0 && activities[0].name && (
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Playing {activities[0].name}
          </p>
        )}
      </div>
    </div>
  );
};

export default DiscordStatus;
