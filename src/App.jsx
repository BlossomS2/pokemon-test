import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./pages/PokemonDetail";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dex" element={<Dex />}></Route>
          <Route path="/pokemon-detail" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
