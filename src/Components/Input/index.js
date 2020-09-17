import React, { useEffect } from 'react';

import './style.css';

function Inputs() {
  


    useEffect(() => {
        const kelvinI = document.getElementById("kelvin");
        const celsiusI = document.getElementById("celsius");
        const fahrenheitI = document.getElementById("fahrenheit");
        const inputs = document.getElementsByClassName("tempInput");

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];

            input.addEventListener("input", e => {
                let value = parseFloat(e.target.value);

                switch (e.target.name) {
                    case "celsius":
                        kelvinI.value = value + 273.15;
                        fahrenheitI.value = (value * 1.8) + 32;
                        break;
                    case "fahrenheit":
                        celsiusI.value = (value - 32) /1.8;
                        kelvinI.value = ((value - 32) /1.8) + 273.15;
                        break;
                    case "kelvin":
                        celsiusI.value = value - 273.15; 
                        fahrenheitI.value = ((value - 273.15) * 1.8) + 32;
                        break;

                    default:
                        break;
                }
            })
        }
    }, [])

    return (
        <div id="content">
            <div className="input-wrapper">
                <label className="labelWrapper" htmlFor="celsius">
                    <h2 className="title">Celsius</h2>
                    <input className="tempInput" id="celsius" name="celsius"></input>
                </label>

                <label className="labelWrapper" htmlFor="fahrenheit">
                    <h2 className="title">Fahrenheit</h2>
                    <input className="tempInput" id="fahrenheit" name="fahrenheit"></input>
                </label>

                <label className="labelWrapper" htmlFor="kelvin">
                    <h2 className="title">Kelvin</h2>
                    <input className="tempInput" id="kelvin" name="kelvin" ></input>
                </label>
            </div>
        </div>
    )
}

export default Inputs;