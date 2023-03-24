import useVerificationHook from "./lib/useVerificationCode";
import type { InputState } from "./lib/useVerificationCode";
import "./style.css";
import { useState } from "react";

function App() {
  const { code, inputStates, inputClass, handleChange, handleKeyDown } =
    useVerificationHook(6);

  return (
    <div className="layout">
      <div className="container">
        <h1>React Code Hook</h1>
        <p>A simple React hook for capturing and verifying PIN codes</p>
        <div className="btn-wrapper">
          <a className="cta" href="#" target="_blank">
            How to install
          </a>
        </div>
        <div className="input-container">
          <p>Demo</p>
          <div className="flexed">
            {inputStates.map((state, ii) => {
              return (
                <input
                  type="number"
                  value={state.digit}
                  className={inputClass}
                  onChange={(e) => handleChange(e, ii)}
                  onKeyDown={handleKeyDown}
                />
              );
            })}
          </div>
          <div className="code">
            <p>
              <b>Code:</b>{" "}
              {code ? code : "Fill up the boxes to see the code here..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
