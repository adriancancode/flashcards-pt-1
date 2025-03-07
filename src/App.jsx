import { useState } from 'react';
import Card from './components/Card.jsx';
import flashcards from './data.js';
import './App.css';

const App = () => {
  const [card, setCard] = useState(0);
  const[showAnswer, setShowAnswer] = useState(false);
  function flipBackward() {
    setCard((prevCard) => (prevCard - 1 + flashcards.length) % flashcards.length);
    setShowAnswer(false);
    
  }

  function flipForward() {
    setCard((prevCard) => (prevCard + 1) % flashcards.length);
    setShowAnswer(false);
    
  }


  return (
    <div className='body'>
      <div className='header'>
        <h1>Flashcards of Rock</h1>
        <h2>Test your inner rock n' roller with these flashcards!</h2>
        <h3>Number of cards: {flashcards.length}</h3>
      </div>
      <Card question={showAnswer ? flashcards[card].answer : flashcards[card].question}/>
      <button onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? "Show Answer" : "Show Question"}</button>
      
      <div className='button-container'>
        <button onClick={flipBackward}>Prev</button>
        <button onClick={flipForward}>Next</button>
      </div>
    </div>
      
  
  )
}

export default App;
