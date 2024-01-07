import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl,API_KEY } from "../constants/constants";
import YouTube from "react-youtube";
function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId,setUrlId] = useState("")
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {});
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
       autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios
    .get(
      `movie/${id}/videos?language=en-US&api_key=${API_KEY}&language=en-US`
      )
      .then((res) => {
        // console.log(id);
        console.log('res.data');
        console.log(res.data);
     
        if(res.data.results.length !==0){
          setUrlId(res.data.results[0])
        }else{
          console.log('Trailer Not available');
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj, index) => (
          <img
            onClick={() => handleMovie(obj.id)}
            key={index}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
            
          />
        ))}
      </div>

     { urlId && <YouTube  opts={opts} videoId={urlId.key}/>}
    </div>
  );
}

export default RowPost;
