import "./App.css";
import Nav from "./Nav";
import Row from "./Row";
import Banner from "./Banner";

const APIKEY = ''
function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <Nav />
      <Banner
        fetchUrl={`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`}
      />
      <h2 id="Trending"> </h2>
      <Row
        title="Trending Now"
        fetchUrl={`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`}
        z_index = "10"
      />

      <h2 id="Movies"> </h2>
      <Row
        title="Top Movies in the U.S Today"
        fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`}
        z_index = "9"
      ></Row>

      <h2 id="Documentaries"> </h2>
      <Row
        title="Documentaries"
        fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=99`}
        z_index = "8"
      ></Row>

      <h2 id="Fam"> </h2>
      <Row
        title="Family Movies"
        fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=10751`}
        z_index = "7"
      ></Row>

      <h2 id="Action"> </h2>
      <Row
        title="Action Movies"
        fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=28`}
        z_index = "6"
      ></Row>

      <h2 id="Tv"> </h2>
      <Row
        title="Top TV Shows in the U.S Today"
        fetchUrl={`https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}`}
        z_index = "5"
      ></Row>

      <h2 id="Comedy"> </h2>
      <Row
        title="T.V Comedies"
        fetchUrl={`https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&with_genres=35`}
        z_index = "4"
      ></Row>

      <h2 id="Netflix Originals"> </h2>
      <Row
        title="Netflix Originals"
        fetchUrl={`https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&with_networks=213`}
        z_index = "3"
      />

      <h2 id="Animation"> </h2>
      <Row
        title="Animation"
        fetchUrl={`https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&with_genres=16`}
        z_index = "2"
      ></Row>
      <div className="Footer">
        <br></br>Ⓒ2022, by Kushal Devkota
      </div>
    </div>
  );
}

export default App;
