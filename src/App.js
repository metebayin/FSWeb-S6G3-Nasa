import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PhotoOfDay from "./components/PhotoOfDay";

function App() {
  const [photoOfDay, setPhotoOfDay] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        console.log("nasa res > ", res);
        setPhotoOfDay(res.data);
      });
  }, []);

  return (
    <div className="App">
      <input type="date"/>
      <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip edin
		İyi eğlenceler! 
    <span role="img" aria-label='go!'>
      🚀
      </span>
      !
      </p>
      <PhotoOfDay photoOfDay={photoOfDay} />
    </div>
  );
}

export default App;
