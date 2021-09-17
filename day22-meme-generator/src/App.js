import "./App.css";
import { useState, useEffect } from "react";
import Templates from './components/Templates';
import Meme from './components/Meme' ; 

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null) ;

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((apiData) => setTemplates(apiData.data.memes));
  }, []);
  console.log(templates);

  return (
    <div className="app">
      <h1>Meme Generator</h1>
      {meme === null ?
      < Templates templates={templates} setMeme={setMeme} /> : <Meme memeData={meme} setMeme={setMeme}/>}
    </div>
  );
}

export default App;
