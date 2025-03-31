import { useState } from 'react';
import './style.css';


function NewtonMethod() {
    const [guess, guess2] = useState();
    const [answer, answer2] = useState();

    function NwtnMeth(e) {
        e.preventDefault();
        let x1 = guess;
        let x2 = x1;

        do {
            x1 = x2;
            x2 = x1 - ((6 * x1 ** 4 - 13 * x1 ** 3 - 18 * x1 ** 2 + 7 * x1 + 6) / (24 * x1 ** 3 - 39 * x1 ** 2 - 36 * x1 + 7));
        } while (Math.abs(x1 - x2) > 0.001);
        
        answer2(x2);
    }

    return (
        <form onSubmit={(e) => NwtnMeth(e)}>
            <div class="newton-container">
                <h1>Newton's Method</h1>
                <form id="newton-form">
                    <label >Root Guess</label>
                    <input type="number" value={guess} placeholder="Please enter your A value" step=".01" onChange={(event) => { guess2(event.target.target.value) }} required/>
                    <label >Root Approximation (Result)</label>
                    <input type="text" value={answer} readonly/>
                    <input type="submit" value="Calculate" />
                </form>
            </div>
        </form>
    )
}

export default NewtonMethod;