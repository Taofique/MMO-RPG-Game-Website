import type { Game } from "../types/TGame";
import Button from "./Button";
import { Link } from "react-router-dom";

type Props = {
  game: Game;
  onAddToFavorites: (game: Game) => void;
};

function GameCard({ game, onAddToFavorites }: Props) {
  return (
    <div className=" w-full border rounded-2xl p-6 shadow hover:shadow-lg transition bg-white flex flex-col items-center">
      <Link to={`/game/${game.id}`} className="w-80 text-center">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-80 objec-cover rounded-2xl"
        />

        <h3 className="text-lg font-semibold mt-2">{game.title}</h3>
        <p className="text-sm text-gray-600">{game.genre}</p>
      </Link>

      <Button
        label="Add to Favorites"
        onClick={() => onAddToFavorites(game)}
      ></Button>
    </div>
  );
}

export default GameCard;
