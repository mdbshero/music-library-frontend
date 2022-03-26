import React, { useState } from "react";

const MusicTable = (props) => {
  return (
    <table>
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
            <tr>
              <td>{item.title}</td>
              <td>{item.album}</td>
              <td>{item.artist}</td>
              <td>{item.genre}</td>
              <td>{item.releaseDate}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default MusicTable;
