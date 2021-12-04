import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  function handleClear() {
    setText("");
    props.showAlert("Text was cleared", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  const disabled = text.length !== 0 ? "" : "disabled";

  // console.log(props.mode);

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "#212529" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="my-3">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              rows="7"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#212529",
                color: props.mode === "light" ? "black" : "white",
              }}
              placeholder="Enter your Text here"
            ></textarea>
          </div>
          <button
            className={`btn btn-primary ${disabled}`}
            onClick={handleUpClick}
          >
            Convert to UpperCase
          </button>
          <button
            className={`btn btn-primary ${disabled} mx-2`}
            onClick={handleLowClick}
          >
            Convert to LowerCase
          </button>
          <button
            className={`btn btn-primary ${disabled} mx-2`}
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            className={`btn btn-primary ${disabled} mx-2`}
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className={`btn btn-danger ${disabled} mx-2`}
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Preview</h2>
        <p className={text.length > 0 ? "" : "text-danger"}>
          {text.length > 0 ? text : "No Text To Preview"}
        </p>
      </div>
    </>
  );
}

export default TextForm;
