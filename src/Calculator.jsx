import React, { useState } from 'react';
import './Calculator.css';
import BackspaceIcon from '@mui/icons-material/Backspace';

function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput("");
        setResult("");
    };

    const handleDeleteLastDigit = () => {
        setInput(input.slice(0, -1)); // Removes the last character
    };

    const handleCalculate = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <>
            <div className='container'>
                <h1>CALCULATOR</h1>
            </div>
            <div className='calculator-container'>
                <div className="calculator">
                    <div className="input">
                        {input}
                    </div>
                    <div className="result">
                        {result}
                    </div>
                    <div className="buttons">
                        <button className="normal-btn" onClick={() => handleClick('1')}>1</button>
                        <button className="normal-btn" onClick={() => handleClick('2')}>2</button>
                        <button className="normal-btn" onClick={() => handleClick('3')}>3</button>
                        <button className="normal-btn" onClick={() => handleClick('+')}>+</button>
                        <button className="normal-btn" onClick={() => handleClick('4')}>4</button>
                        <button className="normal-btn" onClick={() => handleClick('5')}>5</button>
                        <button className="normal-btn" onClick={() => handleClick('6')}>6</button>
                        <button className="normal-btn" onClick={() => handleClick('-')}>-</button>
                        <button className="normal-btn" onClick={() => handleClick('7')}>7</button>
                        <button className="normal-btn" onClick={() => handleClick('8')}>8</button>
                        <button className="normal-btn" onClick={() => handleClick('9')}>9</button>
                        <button className="normal-btn" onClick={() => handleClick('*')}>*</button>
                        <button className="normal-btn" onClick={() => handleClick('0')}>0</button>
                        <button className="normal-btn" onClick={() => handleClick('.')}>.</button>
                        <button className="normal-btn" onClick={() => handleClick('/')}>/</button>
                        <button className="normal-btn" onClick={() => handleDeleteLastDigit()}><BackspaceIcon /></button>
                        <button className="clear" onClick={handleClear}>C</button>
                        <button className="calculate" onClick={handleCalculate}>=</button>
                    </div>
                </div>
            </div>
            <div className='by'>
                <h4>Calculator - Mister J</h4>
            </div>
        </>
    );
}

export default App;
