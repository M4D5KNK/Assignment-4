import { useState } from 'react'; 
import './style.css';

function HeronsFormula() {
    const [a, setASide] = useState();
    const [b, setBSide] = useState();
    const [c, setCSide] = useState();
    const [area, setHeronResult] = useState();

    function HrnsForm(e) {
        e.preventDefault();
        let area = 0.25 * (Math.sqrt(4 * (a ** 2) * (b ** 2) - (((a ** 2) + (b ** 2) - (c ** 2)) ** 2)));
        setHeronResult(area.toFixed(2));
    }

    return (
        <form onSubmit={(e) => HrnsForm(e)}>
            <div className="container">
                <h1>Heron's Formula</h1>
                <div className="altForm">
                    <label>Side a:</label>
                    <input type="number" placeholder="Please enter your A value" step=".01" min='0' value={a} onChange={(event) => { setASide(event.target.value) }} required/>
                    <label>Side b:</label>
                    <input type="number" placeholder="Please enter your B value" step=".01" min='0' value={b} onChange={(event) => { setBSide(event.target.value) }} required/>
                    <label>Side c:</label>
                    <input type="number" placeholder="Please enter your C value" step=".01" min='0' value={c} onChange={(event) => { setCSide(event.target.value) }} required/>
                    <label>Area (Result)</label>
                    <input type="text" value={area} readOnly/>
                    <input type="submit" value="Calculate"/>
                </div>
            </div>
        </form>
    )
}

export default HeronsFormula;