import { useState } from 'react';
import './App.css'
import './components/styles/QuoteBox.css'
import QuoteBox from './components/QuoteBox';
import quotes from "./db/quotes.json";
import { getRandomElement } from './utils/random';

//  array fondos
const backgroundImage = ["bg1", "bg2", "bg3", "bg4"];
const imagePlanet = ["/image/planet1.svg", "/image/planet2.svg", "/image/planet3.svg", "/image/planet4.svg"];

function App() {
  //?  Lógica JavaScript
  //  estado para cambiar frases
  const [quote, setQuote] = useState(getRandomElement(quotes));

  //  estado para cambiar fondo
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgroundImage));

  //  estado para cambiar planetas
  const [changePlanet, setChangePlanet] = useState(getRandomElement(imagePlanet));
  
  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setCurrentBg(getRandomElement(backgroundImage));
    setChangePlanet(getRandomElement(imagePlanet));
  }
  
  return (
    <main className={`App ${currentBg}`}>
      <img src={`${changePlanet}`} />
      <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote} />
    </main>
  );
}

export default App;
