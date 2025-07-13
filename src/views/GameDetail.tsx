import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { GameDetail } from "../types/TGame";
import { fetchGameById } from "../services/gameService";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState<GameDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadGame = async () => {
      try {
        setLoading(true);
        const gameData = await fetchGameById(Number(id));
        setGame(gameData);
      } catch (err) {
        setError("Failed to load game details.");
      } finally {
        setLoading(false);
      }
    };

    loadGame();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Loading game details...</p>
      </div>
    );
  }

  if (error || !game) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-red-500 text-xl">{error || "Game not found."}</p>
        <Link
          to="/"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto p-6 space-y-6">
      <Link
        to="/"
        className="inline-block px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-950"
      >
        ← Back to Browse
      </Link>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full border-3 border-solid md:w-1/2 rounded-xl object-cover shadow"
        />

        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{game.title}</h1>
          <p className="text-gray-600">{game.short_description}</p>

          <ul className="text-sm text-gray-700 space-y-1 mt-4">
            <li>
              <strong>Genre:</strong> {game.genre}
            </li>
            <li>
              <strong>Platform:</strong> {game.platform}
            </li>
            <li>
              <strong>Publisher:</strong> {game.publisher}
            </li>
            <li>
              <strong>Developer:</strong> {game.developer}
            </li>
            <li>
              <strong>Release Date:</strong>{" "}
              {new Date(game.release_date).toLocaleDateString()}
            </li>
          </ul>

          <a
            href={game.game_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Play Now
          </a>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Full Description</h2>
        <p className="text-gray-800 leading-relaxed">
          {game.short_description}
        </p>
      </div>
    </div>
  );
}

export default GameDetails;
