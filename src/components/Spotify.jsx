import { useState, useEffect } from "preact/hooks";
import "../styles/bar.css";
import "../styles/404.css";

const SpotifyStatus = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    
  }, []);

  if (loading) return <h1 class="font-bold text-1xl">Cargando...</h1>;
  if (error) return <p>Error: {error}</p>;

  const { spotify } = data;

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="spotify-status" class="flex gap-4 items-center">
      {spotify ? (
        <div class="flex gap-4 items-center">
          <img
            src={spotify.album_art_url}
            alt="Album Art"
            class="w-auto h-12 rounded-md"
            width="48" // Agregar un valor de ancho adecuado
            height="48" // Agregar un valor de altura correspondiente
          />
          <div class="text-sm">
            <p>{truncateText(spotify.song, 15)}</p>
            <p>{truncateText(spotify.artist, 15)}</p>
          </div>
          <div className="iconn">
            <span className="span" />
            <span className="span" />
            <span className="span" />
          </div>
        </div>
      ) : (
        <div class="flex gap-4 items-center">
          <img
            src="/red_spotify.webp"
            alt="Logo de Spotify"
            class="w-auto h-12"
            width="64"
            height="64"
          />
          <div title="404" class="error">
            404
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotifyStatus;
