import './App.css';
import axios from 'axios';
//Routing
import { Routes, Route } from "react-router-dom";

//React Slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Pages
import HomePage from './pages/Home.Page';
import MoviePage from './pages/Movie.Page';
import PlayPage from './pages/Play.Page';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "3c082f1e86484b53546ae4bbf0bd19bf";

function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
