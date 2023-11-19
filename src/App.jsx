import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';
import quotes from "./db/quotes.json";
import { getRandomElement } from './utils/random';

//  array fondos
const backgroundImage = ["bg1", "bg2", "bg3", "bg4"];

function App() {
  //?  Lógica JavaScript
  //  estado para cambiar frases
  const [quote, setQuote] = useState(getRandomElement(quotes));

  //  estado para cambiar fondo
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgroundImage));
  
  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setCurrentBg(getRandomElement(backgroundImage));
  }
  
  return (
    <main className={`App ${currentBg}`}>
      <QuoteBox quote={quote} handleChangeQuote = {handleChangeQuote} />
    </main>
  );
}

export default App;
