import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useParams, useHistory } from "react-router-dom";
import { getCombinations, getString } from "./data";

function App({ language: initialLanguage }) {
  const { word = "" } = useParams();
  const { push: redirect } = useHistory();
  const [message, setMessage] = useState(decodeURIComponent(word));
  const [language, setLanguage] = useState(initialLanguage);
  const [combinations, setCombinations] = useState([]);
  const textField = useRef();
  const s = code => getString(code, language);
  const onSubmit = e => {
    e.preventDefault();
    if (message != textField.current.value) {
      console.log("a");
      setMessage(textField.current.value);
      redirect(`/${language}/${encodeURIComponent(textField.current.value)}`);
    }
  };

  useEffect(() => {
    const combinations = getCombinations(message, language);
    setCombinations(combinations);
  }, [message, language]);

  const Row = ({ index, style = {}, children }) => (
    <div
      className={`col-12 col-md-6 col-lg-4 text-break`}
      style={{
        hyphens: "auto",
        ...style
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between">
            <h3>
              <strong className="mr-5 d-block d-lg-inline mb-3 mb-lg-0">
                {s("aki")}
              </strong>
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
          <form onSubmit={onSubmit} className="input-group mb-3">
            <input
              type="text"
              ref={textField}
              className="form-control mr-4"
              placeholder={s("whatsYourName")}
              defaultValue={message}
            />
            <button className="btn btn-primary" onClick={onSubmit}>
              {s("submitText")}
            </button>
          </form>
        </div>
        <div className="col-12">
          <div>
            {/*<span>{destress(getRoot(message))}</span>*/}
            {/*<br />*/}
            {combinations.length && (
              <div className="row">
                {combinations.map((combo, index) => (
                  <Row key={index} index={index}>
                    {combo}
                  </Row>
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
