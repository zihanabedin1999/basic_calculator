import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');

  const press = (val) => {
    setInput((prev) => prev + val);
  };

  const clearDisplay = () => {
    setInput('');
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} disabled />
      <div className="buttons">
        {[7,8,9,'/'].map(val => <button key={val} onClick={() => press(val.toString())}>{val === '/' ? '÷' : val}</button>)}
        {[4,5,6,'*'].map(val => <button key={val} onClick={() => press(val.toString())}>{val === '*' ? '×' : val}</button>)}
        {[1,2,3,'-'].map(val => <button key={val} onClick={() => press(val.toString())}>{val === '-' ? '−' : val}</button>)}
        {[0,'.','=','+'].map(val => val === '='
          ? <button key={val} onClick={calculate}>=</button>
          : <button key={val} onClick={() => press(val.toString())}>{val === '+' ? '+' : val}</button>
        )}
        <button className="clear" onClick={clearDisplay}>C</button>
      </div>
    </div>
  );
}

function App() {
  return <Calculator />;
}

export default App;
