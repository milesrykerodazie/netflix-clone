import React, { useState, useEffect } from "react";
import "../ComponentCss/Banner.css";
import axios from "../axios";
import requests from "../requests";

const baseUrl = "https:image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ...." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h2 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h2>
        <div>
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h3 className="banner__description">
          {" "}
          {truncate(movie?.overview, 150)}
        </h3>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
