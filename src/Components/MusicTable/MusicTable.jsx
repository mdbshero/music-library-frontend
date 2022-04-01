import React, { useState } from "react";
import AddSongForm from "../AddSongForm/AddSongForm";

const MusicTable = (props) => {
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  async function handleSubmit(e) {
    const addedSong = { title, album, artist, genre, releaseDate };
    fetch("http://localhost:5005/api/songs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addedSong),
    }).then(() => {
      props.makeGetRequest();
    });
  }

  async function handleClick(id) {
    fetch("http://localhost:5005/api/songs/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log(`deleted ${id}`);
      props.makeGetRequest();
    });
  }

  return (
    <div>
      <div className="col-md-6 mx-auto">
        <AddSongForm
          title={title}
          album={album}
          artist={artist}
          genre={genre}
          releaseDate={releaseDate}
          setTitle={setTitle}
          setAlbum={setAlbum}
          setArtist={setArtist}
          setGenre={setGenre}
          setReleaseDate={setReleaseDate}
          handleSubmit={handleSubmit}
        />
      </div>
      <table className="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th>Song Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Delete Song</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <strong>{item.title}</strong>
                </td>
                <td>
                  <strong>{item.album}</strong>
                </td>
                <td>
                  <strong>{item.artist}</strong>
                </td>
                <td>
                  <strong>{item.genre}</strong>
                </td>
                <td>
                  <strong>{item.releaseDate}</strong>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleClick(item.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;
