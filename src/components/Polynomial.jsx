import { useState } from 'react';
import './style.css';

function Polynomial() {
    const [coefficient, setCoeffs] = useState();
    const [exponents, setExps] = useState();
    const [xValue, setX] = useState();
    const [displayEq, displayEq2] = useState();
    const [displayEv, displayEv2] = useState();

    function Poly(e) {
        e.preventDefault();
        const coeffArr = coefficient.split(" ").map(Number);
        const expArr = exponents.split(" ").map(Number);
        let polynomialEq = "";
        let polynomialEv = 0;

        if (setCoeffs.length == setExps.length) {
            for (let i = 0; i < coeffArr.length; i++) {
                const coeff = coeffArr[i];
                const exp = expArr[i];

                if (i > 0 && coeff >= 0) {
                    polynomialEq += ' + ';
                } else if (i > 0 && coeff < 0) {
                    polynomialEq += ' - ';
                }

                if (exp == 0) {
                    polynomialEq += Math.abs(coeff);
                } else if (exp == 1) {
                    polynomialEq += (Math.abs(coeff)) + 'x';
                } else {
                    polynomialEq += Math.abs(coeff) + 'x^' + exp;
                }
                polynomialEv += coeff * (xValue ** exp);
            }
            displayEq2(polynomialEq);
            displayEv2(polynomialEv.toFixed(2));
        } else {
            displayEq2('Please enter the same # of exponents and coefficients');
            displayEv2('Please enter the same # of exponents and coefficients');
        }
    }

    return (
        <form onSubmit={(e) => Poly(e)}>
            <div className="container">
                <h1>Polynomial Function</h1>
                <div className="altForm">
                    <label >Coefficitents</label>
                    <input type="text" value={coefficient} placeholder="Please enter your coefficient value" onChange={(event) => { setCoeffs(event.target.value) }} required />
                    <label >Exponents</label>
                    <input type="text" value={exponents} placeholder="Please enter your Exponents" onChange={(event) => { setExps(event.target.value) }} required />
                    <label >x Value</label>
                    <input type="number" value={xValue} placeholder="Please enter your x value" onChange={(event) => { setX(event.target.value) }} required />
                    <label >Polynomial Function (Result):</label>
                    <input type="text" value={displayEq} readOnly />
                    <label >Polynomial Evaluation (Result):</label>
                    <input type="text" value={displayEv} readOnly />
                    <input type="submit" value="Calculate" />
                </div>
            </div>
        </form>
    )
}

export default Polynomial;