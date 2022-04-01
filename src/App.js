import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
import TitleBar from "./Components/TitleBar/TitleBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import "./App.css";
import AddSongForm from "./Components/AddSongForm/AddSongForm";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [message, setMessage] = useState("");

  async function makeGetRequest() {
    try {
      let response = await axios.get("http://localhost:5005/api/songs");
      setItems(response.data);
    } catch (ex) {
      console.log("Error in API call.");
    }
  }


  let handleSubmit = async (e) => {
    const addedSong = { title, album, artist, genre, releaseDate };
    fetch("http://localhost:5005/api/songs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addedSong),
    }).then(() => {
      makeGetRequest();
    });
  };

  useEffect(() => {
    makeGetRequest();
  }, []);

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  }

  //function search(rows) {
  //return rows.filter(row => row.title.toLowerCase().indexOf(query.toLowerCase())>-1
  // || row.album.toLowerCase().indexOf(query)>-1
  //|| row.artist.toLowerCase().indexOf(query)>-1
  //|| row.genre.toLowerCase().indexOf(query)>-1
  // || row.releaseDate.toLowerCase().indexOf(query)>-1);
  //}

  return (
    <div className="container gradient-custom">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <header className="border border-4 border-dark text-center">
            <TitleBar />
          </header>
        </div>
      </div>
      <div className="row">
        <main>
          <div className="col-md-10 mx-auto border border-4 border-dark">
            <div className="col-md-3 mx-auto">
              <SearchBar query={query} setQuery={setQuery} />
            </div>
            <div className="col-md-3 mx-auto">
              <AddSongForm
                title={title}
                album={album}
                artist={artist}
                genre={genre}
                releaseDate={releaseDate}
                message={message}
                setTitle={setTitle}
                setAlbum={setAlbum}
                setArtist={setArtist}
                setGenre={setGenre}
                setReleaseDate={setReleaseDate}
                setMessage={setMessage}
                handleSubmit={handleSubmit}
              />
            </div>
            <div className="col-md-10 mx-auto">
              <MusicTable items={search(items)} makeGetRequest={makeGetRequest} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
