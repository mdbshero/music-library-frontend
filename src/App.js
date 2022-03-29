import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
import TitleBar from "./Components/TitleBar/TitleBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("")


  async function makeGetRequest() {
    try {
      let response = await axios.get(
        "http://www.devcodecampmusiclibrary.com/api/music"
      );
      setItems(response.data);
    } catch (ex) {
      console.log("Error in API call.");
    }
  }

  useEffect(() => {
    makeGetRequest();
  },[]);

  function search(rows) {
    return rows.filter(row => row.title.toLowerCase().indexOf(query)>-1
    || row.album.toLowerCase().indexOf(query)>-1
    || row.artist.toLowerCase().indexOf(query)>-1
    || row.genre.toLowerCase().indexOf(query)>-1
    || row.releaseDate.toLowerCase().indexOf(query)>-1);
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
        <header className="border">
        <TitleBar />
      </header>
      <main>
        <div>
        <SearchBar query ={query} setQuery={setQuery}/>
        </div>
        <div className="border">
      <MusicTable items={search(items)}/>
      </div>
      </main>
        </div>
      </div>
    </div>
  );
}

export default App;
