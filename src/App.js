import { Routes, Route } from "react-router-dom";
import CharacterDetailLists from "./routes/CharacterDetailLists";
import CharacterLists from "./routes/CharacterLists";
import MovieList from "./routes/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/character" element={<CharacterLists />} />
        <Route path="/character_details" element={<CharacterDetailLists />} />
      </Routes>
    </div>
  );
}

export default App;
