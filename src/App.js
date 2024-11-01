import React, { useState } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState('');  // Ensure total starts as a string

  const handleClick = (e) => {
    setTotal(total + e.target.name);  // Append the button value to total
  }

  const clearAll = () => {
    setTotal('');  // Clear total to an empty string
  }

  const deleteLast = () => {
    setTotal(total.toString().slice(0, -1));  // Convert total to string before slicing
  }

  const calculate = () => {
    try {
      setTotal(eval(total).toString());  // Safely evaluate and convert result to string
    } catch (error) {
      setTotal("Error");
    }
  }

  return ( 
    <div className="App">
      <h1>Modern Calculator</h1>

      <div className='container'>
        <form>
          <input type='text' value={total} readOnly />  {/* Display total */}
        </form>

        <div className='keypad'>
          <button id="clear" className='highlight' onClick={clearAll}>AC</button>
          <button className='highlight' onClick={deleteLast}>DEL</button>
          <button name='/' className='highlight' onClick={handleClick}>&divide;</button>
          <button name='7' onClick={handleClick}>7</button>
          <button name='8' onClick={handleClick}>8</button>
          <button name='9' onClick={handleClick}>9</button>
          <button name='*' onClick={handleClick} className='highlight'>&times;</button>
          <button name='4' onClick={handleClick}>4</button>
          <button name='5' onClick={handleClick}>5</button>
          <button name='6' onClick={handleClick}>6</button>
          <button name='-' onClick={handleClick} className='highlight'>-</button>
          <button name='1' onClick={handleClick}>1</button>
          <button name='2' onClick={handleClick}>2</button>
          <button name='3' onClick={handleClick}>3</button>
          <button name='+' onClick={handleClick} className='highlight'>+</button>
          <button name='0' onClick={handleClick}>0</button>
          <button name='.' onClick={handleClick}>.</button>
          <button id="equal" className='highlight' onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
