import { useState } from "react";
import "./App.css";
import db from "./db/db.json";
import ContainerInfo from "./components/ContainerInfo";

const images = ["bg1", "bg2", "bg3", "bg4"];

function App() {
  const getRandomItem = (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length);

    return listItems[randomIndex];
  };

  const handleNewQuote = () => {
    setQuote(getRandomItem(db));
    setBgImage(getRandomItem(images));
  };

  const [quote, setQuote] = useState(getRandomItem(db));
  const [bgImage, setBgImage] = useState(getRandomItem(images));

  return (
    <div className={`App ${bgImage}`}>
      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  );
}

export default App;
