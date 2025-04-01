import { useState } from 'react';
import './style.css';

function AmbiguousCase() {
    const [aAngle, setAAngle] = useState();
    const [aSide, setASide] = useState();
    const [bSide, setBSide] = useState();
    const [ambiguousResult, setAmbResult] = useState();

    function AmbgCa(e) {
        e.preventDefault();
        let hSide = Math.round((bSide * (Math.sin((aAngle) * (Math.PI / 180)))) * 100) / 100;

        if (aAngle <= 90) {
            if (aSide < hSide) {
                setAmbResult("No triangle");
            } else if (aSide == hSide) {
                setAmbResult("Right triangle");
            } else if (aSide > bSide) {
                setAmbResult("One triangle");
            } else if (hSide < aSide && aSide < bSide) {
                setAmbResult("Two triangles (ambiguous case)");
            }
        } else if (aAngle < 180) {
            if (aSide < bSide || aSide == bSide) {
                setAmbResult("No triangle");
            } else {
                setAmbResult("One triangle");
            }
        } else {
            setAmbResult("Please enter an angle between 0-180");
        }
    }

    return (
        <form onSubmit={(e) => AmbgCa(e)}>
            <div className="container">
                <h1>Ambiguous Case</h1>
                <div className="altForm">
                    <label>Angle A</label>
                    <input type="number" value={aAngle} placeholder="Please enter your A value" step=".01" onChange={(event) => {setAAngle(event.target.value)}} required/>
                    <label>Side a:</label>
                    <input type="number" value={aSide} placeholder="Please enter your B value" step=".01" min='0' onChange={(event) => {setASide(event.target.value)}} required/>
                    <label>Side b:</label>
                    <input type="number" value={bSide} placeholder="Please enter your C value" step=".01" min='0' onChange={(event) => {setBSide(event.target.value)}} required/>
                    <label >Triangle Type (Result)</label>
                    <input type="text" value={ambiguousResult} readOnly />
                    <input type="submit" value="Calculate"/>
                </div>
            </div>
        </form>

    )
}

export default AmbiguousCase;