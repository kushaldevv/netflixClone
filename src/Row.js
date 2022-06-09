import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "axios";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import genres from "./genres.json";

const base_url = "https://image.tmdb.org/t/p/w500";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function Row({ title, fetchUrl, z_index }) {
  const [vids, SetVids] = useState([]);
  const getVids = async () => {
    const req = await axios(fetchUrl);
    SetVids(req.data.results.slice(0, 12));
    return req;
  };
  useEffect(() => {
    getVids();
  }, []);
  // const handleRed = (e) => {
  //   console.log('hello', e.target.style = "color: red;")
  // }
  return (
    <div className="row">
      <div className="header">
        <h3 className="title">{title}</h3>
      </div>
      <div className="container" style = {{zIndex: z_index}}>
        <button onClick={(e) => {
            const slider = e.target.closest(".container").querySelector(".slider");
            const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));
            const itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"));
            const itemCount = 12;
            if (sliderIndex - 1 < 0) 
              slider.style.setProperty("--slider-index", Math.ceil(itemCount / itemsPerScreen) - 1);
             else slider.style.setProperty("--slider-index", sliderIndex - 1);       
        }} className="handle left-handle">
          <div className="text">&#8249;</div>
        </button>
        <div className="slider">
          {vids.map((vid) => (
            <div className="poster" key = {vid.title || vid.name || 'key'}>
              <div className="image">
                <img
                  className="image image_regular"
                  alt={vid.title || "title"}
                  src={`${base_url}${vid.poster_path}`}
                />
                <img
                  className="image image_backdrop"
                  alt={""}
                  src={`${base_url}${vid.backdrop_path}`}
                />
                <div className = "placeholder">&nbsp;
                <div className="image_desc" style={{ color: "white" }}>
                <div className="poster_title">
                  <ThumbDownIcon className = "emote" style = {{color: "white", maxHeight: "0.8rem"}} onClick = {(e) =>  e.target.style.color = "red"}/>
                  &nbsp;&nbsp;&nbsp;
                  <ThumbUpIcon className = "emote" style = {{color: "white",maxHeight: "0.8rem"}} onClick = {(e) =>  e.target.style.color = "green"}/>
                  &nbsp;&nbsp;&nbsp;
                  <FavoriteIcon className = "emote" style = {{color: "white",maxHeight: "0.8rem"}} onClick = {(e) =>  e.target.style.color = "red"}/>
                  <br></br>{truncate((vid.title || vid.original_title || vid.name || "Title"), 20)}
                </div>
                <div className="poster_genres">
                  {(() => {
                    const arr = [];
                    var id = "";
                    for (let i = 0; i < 3; i++) {
                      try {
                        id = vid.genre_ids[i];
                        id = genres[id.toString()];
                      } catch (err) {}
                      arr.push(<li className="genre">{id}&nbsp;&nbsp;</li>);
                    }
                    return arr;
                  })()}{}
                </div>
                </div>
              </div>
              </div>
              
            </div>
          ))}
        </div>
        <button onClick={(e) => {
            const slider = e.target.closest(".container").querySelector(".slider");
            const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));
            const itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"));
            const itemCount = 12;
            Math.ceil(itemCount / itemsPerScreen)
            if (sliderIndex + 1 >= Math.ceil(itemCount / itemsPerScreen))
              slider.style.setProperty("--slider-index", 0);
            else slider.style.setProperty("--slider-index", sliderIndex + 1);        
        }} className="handle right-handle">
          <div className="text">&#8250;</div>
        </button>
      </div>
    </div>
  );
}
export default Row;
