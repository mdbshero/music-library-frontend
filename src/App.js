import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";

function App() {
  const [items, setItems] = useState([]);

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
  });

  return (
    <div>
      <MusicTable items={items}/>
    </div>
  );
}

export default App;
