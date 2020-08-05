import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useParams, useHistory } from "react-router-dom";
import { getCombinations, getString } from "./data";

function App({ language: initialLanguage }) {
  const { word = "" } = useParams();
  const { push: redirect } = useHistory();
  const [message, setMessage] = useState(word);
  const [language, setLanguage] = useState(initialLanguage);
  const textField = useRef();
  const s = code => getString(code, language);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between">
            <h3>
              <strong className="mr-5">{s("aki")}</strong>
              {s("getYourYpokoristiko")}
            </h3>
            <h3>
              <a
                className={
                  language === "en"
                    ? "text-primary font-weight-bold"
                    : "text-primary"
                }
                href="#"
                onClick={e => {
                  e.preventDefault();
                  setLanguage("en");
                  redirect(`/en/${encodeURIComponent(message)}`);
                }}
              >
                en
              </a>
              <span className="pl-2 pr-2">/</span>
              <a
                className={
                  language === "gr"
                    ? "text-primary font-weight-bold"
                    : "text-primary"
                }
                href="#"
                onClick={e => {
                  e.preventDefault();
                  setLanguage("gr");
                  redirect(`/gr/${encodeURIComponent(message)}`);
                }}
              >
                gr
              </a>
            </h3>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              ref={textField}
              className="form-control mr-4"
              placeholder={s("whatsYourName")}
              defaultValue={message}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                setMessage(textField.current.value);
                redirect(
                  `/${language}/${encodeURIComponent(textField.current.value)}`
                );
              }}
            >
              {s("submitText")}
            </button>
          </div>
        </div>
        <div className="col-12">
          <div>
            {/*<span>{destress(getRoot(message))}</span>*/}
            {/*<br />*/}
            {message && (
              <div className="row">
                {getCombinations(message, language).map((combo, index) => (
                  <div
                    className="col-6 col-md-2 col-lg-3 text-break"
                    style={{
                      hyphens: "auto"
                    }}
                    key={`${index}`}
                  >
                    {combo}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
