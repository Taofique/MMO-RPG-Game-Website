// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import type { GameDetail } from "../types/TGame";
// import { fetchGameById } from "../services/gameService";

// function GameDetails() {
//   const { id } = useParams();
//   const [game, setGame] = useState<GameDetail | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const loadGame = async () => {
//       try {
//         setLoading(true);
//         const gameData = await fetchGameById(Number(id));
//         setGame(gameData);
//       } catch (err) {
//         setError("Failed to load game details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadGame();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-xl text-gray-500">Loading game details...</p>
//       </div>
//     );
//   }

//   if (error || !game) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen text-center">
//         <p className="text-red-500 text-xl">{error || "Game not found."}</p>
//         <Link
//           to="/"
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Back to Browse
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-8xl mx-auto p-6 space-y-6">
//       <Link
//         to="/"
//         className="inline-block px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-950"
//       >
//         ← Back to Browse
//       </Link>

//       <div className="flex flex-col md:flex-row gap-6">
//         <img
//           src={game.thumbnail}
//           alt={game.title}
//           className="w-full border-3 border-solid md:w-1/2 rounded-xl object-cover shadow"
//         />

//         <div className="space-y-3">
//           <h1 className="text-3xl font-bold">{game.title}</h1>
//           <p className="text-gray-600">{game.short_description}</p>

//           <ul className="text-sm text-gray-700 space-y-1 mt-4">
//             <li>
//               <strong>Genre:</strong> {game.genre}
//             </li>
//             <li>
//               <strong>Platform:</strong> {game.platform}
//             </li>
//             <li>
//               <strong>Publisher:</strong> {game.publisher}
//             </li>
//             <li>
//               <strong>Developer:</strong> {game.developer}
//             </li>
//             <li>
//               <strong>Release Date:</strong>{" "}
//               {new Date(game.release_date).toLocaleDateString()}
//             </li>
//           </ul>

//           <a
//             href={game.game_url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Play Now
//           </a>
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-xl font-semibold mb-2">Full Description</h2>
//         <p className="text-gray-800 leading-relaxed">
//           {game.short_description}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default GameDetails;

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
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <p className="text-xl text-gray-400 animate-pulse">
          Loading game details...
        </p>
      </div>
    );
  }

  if (error || !game) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 px-4">
        <p className="text-red-500 text-xl mb-4">
          {error || "Game not found."}
        </p>
        <Link
          to="/"
          className="mt-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition"
        >
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    // <div className="min-h-screen bg-gray-900 text-gray-200 px-6 py-10 max-w-7xl mx-auto space-y-10">
    <div className="min-h-screen bg-gray-900 text-gray-200 px-6 py-10 pt-30 max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full md:w-1/2 rounded-2xl object-cover shadow-lg border-2 border-indigo-700"
        />

        <div className="flex flex-col space-y-5 md:flex-1">
          <h1 className="text-4xl font-extrabold tracking-wide">
            {game.title}
          </h1>
          <p className="text-gray-400 italic">{game.short_description}</p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400 font-medium">
            <li>
              <span className="font-semibold text-indigo-400">Genre:</span>{" "}
              {game.genre}
            </li>
            <li>
              <span className="font-semibold text-indigo-400">Platform:</span>{" "}
              {game.platform}
            </li>
            <li>
              <span className="font-semibold text-indigo-400">Publisher:</span>{" "}
              {game.publisher}
            </li>
            <li>
              <span className="font-semibold text-indigo-400">Developer:</span>{" "}
              {game.developer}
            </li>
            <li>
              <span className="font-semibold text-indigo-400">
                Release Date:
              </span>{" "}
              {new Date(game.release_date).toLocaleDateString()}
            </li>
          </ul>

          <a
            href={game.game_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block self-start px-6 py-3 mt-4 bg-indigo-600 hover:bg-indigo-800 rounded-lg text-white font-semibold shadow-lg transition"
          >
            Play Now
          </a>
        </div>
      </div>

      <section className="bg-gray-800 rounded-2xl p-6 shadow-inner">
        <h2 className="text-2xl font-bold mb-4 text-indigo-400">
          Full Description
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {game.short_description}
        </p>
      </section>
    </div>
  );
}

export default GameDetails;
