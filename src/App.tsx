import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import GameDetails from "./views/GameDetail";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen w-full">
        <main className="max-w-6xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/game/:id" element={<GameDetails />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
