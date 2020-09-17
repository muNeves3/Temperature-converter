import React from 'react';

import './style.css';

function Inputs() {
    return (
        <div id="content">
            <div className="input-wrapper">
                <label className="labelWrapper" htmlFor="celsius">
                    <h2 className="title">Celsius</h2>
                    <input className="tempInput" id="celsius"></input>
                </label>

                <label className="labelWrapper" htmlFor="fahrenheit">
                    <h2 className="title">Fahrenheit</h2>
                    <input className="tempInput" id="fahrenheit"></input>
                </label>

                <label className="labelWrapper" htmlFor="kelvin">
                    <h2 className="title">Kelvin</h2>
                    <input className="tempInput" id="kelvin"></input>
                </label>
            </div>
        </div>
    )
}

export default Inputs;