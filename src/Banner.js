import React, { useEffect, useState } from "react";
import "./Banner.css";
import "./components/playbutton.png";
import axios from "axios";


const base_url = "https://image.tmdb.org/t/p/original";
const randInt = Math.floor(Math.random() * 18);

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function Banner({ fetchUrl }) {
  const [ban, SetBan] = useState([]);

  const getBan = async () => {
    const req = await axios(fetchUrl);
    SetBan(req.data.results[randInt]);
    return req;
  };

  useEffect(() => {
    getBan();
  }, []);
  <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${ban.backdrop_path})`,
        backgroundPosition: "Top",
      }}
    >
      <div className="banner__con">
        <h1 className="banner__title">{ban.original_title || ban.title || ban.name || "Title"}</h1>
        <h1 className="banner__desc">{truncate(ban.overview, 175)}</h1>
        <div className="banner__buttons">
          <div className="t__rating">
            PG 13+{/* {/^(\w+\s*\-\s*\d+\+*)/.exec(anime["rating"])[0]} */}
          </div>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
