import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY,imageUrl } from "../constants/constants";


function Banner() {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        let no =  Math.floor(Math.random() * 20);
        console.log('jksfhdgjklgdhjklsfghdjhksfghd');
        console.log(no);
        console.log("response.data.results[0]");
        console.log(response.data.results[0]);
        setMovie(response.data.results[no]);
      });
  }, []);

  return (
    <div
    style={{backgroundImage:`URL(${movie ? imageUrl+movie.backdrop_path :""})`}}
    className="banner">
      <div className="content">
        {console.log("movie name")}
        {console.log(movie.name)}
        {console.log("movie title")}
        {console.log(movie.title)}
        <h1 className="title">{movie.name ? movie.name : movie.title}</h1>
        <div className="banner_buttons">
          <button className="button"> Play</button>
          <button className="button"> My List</button>
        </div>
        <div className="description">{movie ? movie.overview : ""} </div>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
