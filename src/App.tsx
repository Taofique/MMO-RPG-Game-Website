import { Route, Routes } from "react-router";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import GameDetails from "./views/GameDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/game/:id" element={<GameDetails />} />
    </Routes>
  );
}

export default App;
