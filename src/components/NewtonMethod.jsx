import { useState } from 'react';
import './style.css';


function NewtonMethod() {
    const [guess, setGuess] = useState();
    const [answer, setNewtonResult] = useState();

    function NwtnMeth(e) {
        e.preventDefault();
        let x1 = guess;
        let x2 = x1;

        do {
            x1 = x2;
            x2 = x1 - ((6 * x1 ** 4 - 13 * x1 ** 3 - 18 * x1 ** 2 + 7 * x1 + 6) / (24 * x1 ** 3 - 39 * x1 ** 2 - 36 * x1 + 7));
        } while (Math.abs(x1 - x2) > 0.001);
        
        setNewtonResult(x2.toFixed(2));
    }

    return (
        <form onSubmit={(e) => NwtnMeth(e)}>
            <div className="container">
                <h1>Newton's Method</h1>
                <div className="altForm">
                    <label >Root Guess</label>
                    <input type="number" value={guess} placeholder="Please enter your A value" step=".01" onChange={(event) => { setGuess(event.target.value) }} required/>
                    <label >Root Approximation (Result)</label>
                    <input type="text" value={answer} readOnly/>
                    <input type="submit" value="Calculate" />
                </div>
            </div>
        </form>
    )
}

export default NewtonMethod;