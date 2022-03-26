import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
import TitleBar from "./Components/TitleBar/TitleBar";
import './App.css'

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
  },[]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
        <header className="border">
        <TitleBar />
      </header>
      <main>
        <div className="border">
      <MusicTable items={items}/>
      </div>
      </main>
        </div>
      </div>
    </div>
  );
}

export default App;
