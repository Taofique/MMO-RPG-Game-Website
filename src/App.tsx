import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import GameDetails from "./views/GameDetail";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
