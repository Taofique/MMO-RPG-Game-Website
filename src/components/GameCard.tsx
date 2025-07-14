// // // import type { Game } from "../types/TGame";
// // // import Button from "./Button";
// // // import { Link } from "react-router-dom";

// // // type Props = {
// // //   game: Game;
// // //   onAddToFavorites: (game: Game) => void;
// // // };

// // // function GameCard({ game, onAddToFavorites }: Props) {
// // //   return (
// // //     // <div className=" w-full border rounded-2xl p-6 shadow hover:shadow-lg transition bg-white flex flex-col items-center duration-300 ease-in">
// // //     <div className="w-[320px] border-2 border-gray-300 rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out flex flex-col items-center">
// // //       <Link to={`/game/${game.id}`} className="w-80 text-center">
// // //         <img
// // //           src={game.thumbnail}
// // //           alt={game.title}
// // //           className="w-full h-80 objec-cover rounded-2xl"
// // //         />

// // //         <h3 className="text-lg font-semibold mt-2">{game.title}</h3>
// // //         <p className="text-sm text-gray-600">{game.genre}</p>
// // //       </Link>

// // //       <Button
// // //         label="Add to Favorites"
// // //         onClick={() => onAddToFavorites(game)}
// // //       ></Button>
// // //     </div>
// // //   );
// // // }

// // // export default GameCard;

// // import type { Game } from "../types/TGame";
// // import Button from "./Button";
// // import { Link } from "react-router-dom";

// // type Props = {
// //   game: Game;
// //   onAddToFavorites: (game: Game) => void;
// // };

// // function GameCard({ game, onAddToFavorites }: Props) {
// //   return (
// //     <div className="w-[360px] border-2 border-gray-300 rounded-2xl p-4 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transform transition-all duration-300 ease-in-out flex flex-col items-center gap-3">
// //       <Link to={`/game/${game.id}`} className="w-full text-center">
// //         <img
// //           src={game.thumbnail}
// //           alt={game.title}
// //           // className="w-full h-64 object-cover rounded-xl"
// //           className="w-full object-contain rounded-xl bg-gray-100"
// //         />
// //         <h3 className="text-xl font-semibold mt-3">{game.title}</h3>
// //         <p className="text-sm text-gray-500">{game.genre}</p>
// //       </Link>

// //       <Button label="Add to Favorites" onClick={() => onAddToFavorites(game)} />
// //     </div>
// //   );
// // }

// // export default GameCard;

// import type { Game } from "../types/TGame";
// import Button from "./Button";
// import { Link } from "react-router-dom";

// type Props = {
//   game: Game;
//   onAddToFavorites: (game: Game) => void;
// };

// function GameCard({ game, onAddToFavorites }: Props) {
//   return (
//     <div className="w-[360px] border border-gray-500 rounded-2xl p-4 bg-gray-700 shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transform transition-all duration-300 ease-in-out flex flex-col items-center gap-3">
//       <Link to={`/game/${game.id}`} className="w-full text-center">
//         <img
//           src={game.thumbnail}
//           alt={game.title}
//           className="w-full object-contain rounded-xl bg-gray-700 p-2"
//         />
//         <h3 className="text-xl font-semibold mt-3 text-white">{game.title}</h3>
//         <p className="text-sm text-gray-400">{game.genre}</p>
//       </Link>

//       <Button label="Add to Favorites" onClick={() => onAddToFavorites(game)} />
//     </div>
//   );
// }

// export default GameCard;

import type { Game, Favorite } from "../types/TGame";
import Button from "./Button";
import { Link } from "react-router-dom";

type Props = {
  game: Game;
  onAddToFavorites: (game: Game) => void;
  favoriteGames: Favorite[]; // <- pass down the current favorites
};

function GameCard({ game, onAddToFavorites, favoriteGames }: Props) {
  const isFavorited = favoriteGames.some((fav) => fav.id === game.id);

  return (
    <div className="w-[360px] border border-gray-500 rounded-2xl p-4 bg-gray-700 shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transform transition-all duration-300 ease-in-out flex flex-col items-center gap-3">
      <Link to={`/game/${game.id}`} className="w-full text-center">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full object-contain rounded-xl bg-gray-700 p-2"
        />
        <h3 className="text-xl font-semibold mt-3 text-white">{game.title}</h3>
        <p className="text-sm text-gray-400">{game.genre}</p>
      </Link>

      <Button
        label={isFavorited ? "✓ Favorited" : "Add to Favorites"}
        variant={isFavorited ? "secondary" : "primary"}
        onClick={() => {
          if (!isFavorited) onAddToFavorites(game);
        }}
        disabled={isFavorited}
      />
    </div>
  );
}

export default GameCard;
