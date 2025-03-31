import { useState } from 'react';
import './style.css';

function Polynomial() {
    const [coefficient, coeffs] = useState();
    const [exponents, exps] = useState();
    const [xValue, x] = useState();
    // ASK MATT IF I SHOULD MAKE IT CONST
    let [displayEq, displayEq2] = useState();
    let [displayEv, displayEv2] = useState();

    function Poly(e) {
        e.preventDefault();
        const coeffArr = coefficient.split(" ").map(Number);
        const expArr = exponents.split(" ").map(Number);
        let polynomialEq = "";
        let polynomialEv = 0;

        if (coeffs.length == exps.length) {
            for (let i = 0; i < coeffs.length; i++) {
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
            displayEv2(polynomialEv);
        } else {
            displayEq2('Please enter the same # of exponents and coefficients');
            displayEv2('Please enter the same # of exponents and coefficients');
        }
    }

    return (
        <form onSubmit={(e) => Poly(e)}>
            <div class="polynomial-container">
                <h1>Polynomial Function</h1>
                <form id="polynomial-form">
                    <label >Coefficitents</label>
                    <input type="text" value={coefficient} placeholder="Please enter your coefficient value" onChange={(event) => { coeffs(event.target.target.value) }} required />
                    <label >Exponents</label>
                    <input type="text" value={exponents} placeholder="Please enter your Exponents" onChange={(event) => { exps(event.target.target.value) }} required />
                    <label >x Value</label>
                    <input type="number" value={xValue} placeholder="Please enter your x value" onChange={(event) => { x(event.target.target.value) }} required />
                    <label >Polynomial Function (Result):</label>
                    <input type="text" value={displayEq} readonly />
                    <label >Polynomial Evaluation (Result):</label>
                    <input type="text" value={displayEv} readonly />
                    <input type="submit" value="Calculate" />
                </form>
            </div>
        </form>
    )
}

export default Polynomial;