import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

const MusicTable = (props) => {
  return (
    <table className="table table-striped table-hover table-responsive">
      <thead>
        <tr>
          <th>Song Title</th>
          <th>Album</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) => {
          return (
            <tr key ={index}>
              <td><strong>{item.title}</strong></td>
              <td><strong>{item.album}</strong></td>
              <td><strong>{item.artist}</strong></td>
              <td><strong>{item.genre}</strong></td>
              <td><strong>{item.releaseDate}</strong></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default MusicTable;
