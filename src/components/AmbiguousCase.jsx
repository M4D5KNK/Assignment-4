import { useState } from 'react';
import './style.css';

function AmbiguousCase() {
    const [aAngle, aAngle2] = useState();
    const [aSide, aSide2] = useState();
    const [bSide, bSide2] = useState();
    const [ambiguousResult, ambiguousResult2] = useState();

    function AmbgCa(e) {
        e.preventDefault();
        let hSide = Math.round((bSide * (Math.sin((aAngle) * (Math.PI / 180)))) * 100) / 100;

        if (aAngle <= 90) {
            if (aSide < hSide) {
                ambiguousResult2("No triangle");
            } else if (aSide == hSide) {
                ambiguousResult2("Right triangle");
            } else if (aSide > bSide) {
                ambiguousResult2("One triangle");
            } else if (hSide < aSide && aSide < bSide) {
                ambiguousResult2("Two triangles (ambiguous case)");
            }
        } else if (aAngle < 180) {
            if (aSide < bSide || aSide == bSide) {
                ambiguousResult2("No triangle");
            } else {
                ambiguousResult2("One triangle");
            }
        } else {
            ambiguousResult2("Please enter an angle between 0-180");
        }
    }

    return (
        <form onSubmit={(e) => AmbgCa(e)}>
            <div class="ambiguous-container">
                <h1>Ambiguous Case</h1>
                <form id="ambiguous-form">
                    <label>Angle A</label>
                    <input type="number" value={aAngle} placeholder="Please enter your A value" step=".01" onChange={(event) => {aAngle2(event.target.target.value)}} required/>
                    <label>Side a:</label>
                    <input type="number" value={aSide} placeholder="Please enter your B value" step=".01" min='0' onChange={(event) => {aSide2(event.target.target.value)}} required/>
                    <label>Side b:</label>
                    <input type="number" value={bSide} placeholder="Please enter your C value" step=".01" min='0' onChange={(event) => {bSide2(event.target.target.value)}} required/>
                    <label for="ambiguous-result">Triangle Type (Result)</label>
                    <input type="text" value={ambiguousResult} readonly />
                    <input type="submit" value="Calculate"/>
                </form>
            </div>
        </form>

    )
}

export default AmbiguousCase;