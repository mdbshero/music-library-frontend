import React, { useState } from "react";

const MusicTable = (props) => {


  function handleClick(id) {
    fetch("http://localhost:5005/api/songs/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log(`deleted ${id}`);
      props.makeGetRequest();
    });

  }

  return (
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
                <button className="btn btn-outline-danger" onClick={() => handleClick(item.id)}>
                  X
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MusicTable;
