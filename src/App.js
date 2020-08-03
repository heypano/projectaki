import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  combineWords,
  destress,
  endings,
  endsInAVowel,
  getCombinations,
  getRoot
} from "./data";

function App() {
  const [message, setMessage] = useState("");
  const textField = useRef();
  const isFinalVowel = endsInAVowel(message);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="input-group">
            <input type="text" ref={textField} className="form-control mr-4" />
            <button
              className="btn btn-primary"
              onClick={() => setMessage(textField.current.value)}
            >
              Για πές
            </button>
          </div>
        </div>
        <div className="col-12">
          <div>
            {/*<span>{destress(getRoot(message))}</span>*/}
            {/*<br />*/}
            {message && (
              <div className="d-flex flex-row flex-wrap align-items-center">
                {getCombinations(message)}
              </div>
            )}
            {/*{isFinalVowel && <span>{message} ends in a vowel</span>}*/}
            {/*{!isFinalVowel && <span>{message} does not end in a vowel</span>}*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
