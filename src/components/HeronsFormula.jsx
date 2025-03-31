import { useState } from 'react'; 
import './style.css';

function HeronsFormula() {
    const [a, aSide] = useState();
    const [b, bSide] = useState();
    const [c, cSide] = useState();
    const [area, areaValue] = useState();

    function HrnsForm (e) {
        e.preventDefault();
        let area = 0.25 * (Math.sqrt(4 * (a ** 2) * (b ** 2) - (((a ** 2) + (b ** 2) - (c ** 2)) ** 2)));
        areaValue(area);
    }

    return (
        <form onSubmit={(e) => HrnsForm(e)}>
            <div class="heron-container">
                <h1>Heron's Formula</h1>
                <form id="heron-form">
                    <label>Side a:</label>
                    <input type="number" value={a} placeholder="Please enter your A value" step=".01" min='0' onChange={(event) => {aSide(event.target.target.value)}} required/>
                    <label>Side b:</label>
                    <input type="number" value={b} placeholder="Please enter your B value" step=".01" min='0' onChange={(event) => {bSide(event.target.target.value)}} required/>
                    <label>Side c:</label>
                    <input type="number" value={c} placeholder="Please enter your C value" step=".01" min='0' onChange={(event) => {cSide(event.target.target.value)}} required/>
                    <label>Area (Result)</label>
                    <input type="text" value={area} readonly/>
                    <input type="submit" value="Calculate"/>
                </form>
            </div>
        </form>
    )
}

export default HeronsFormula;