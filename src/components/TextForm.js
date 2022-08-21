import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("Hey");
    setText(event.target.value);
  };

  // UPPER CASE FUNCTION//
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  // lOWER CASE FUNCTION/
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  // CLEAR TEXT FUNCTION //
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  // FIND TEXT FUNCTION?//
  const handleFindChange = (event) => {
    findWord(event.target.value);
  };

  // REPLACE TEXT FUNCTION?//
  const handleReplaceChange = (event) => {
    console.log(replaceWord(event.target.value));
  };

  const handleReplaceClick = () => {
    let newText = text.replaceAll(fWord, rWord);
    setText(newText);
  };

  //SPEAK TEXT FUNCTION//
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    let newText = "";
    setText(newText);
    
  };

  // REVERSE TEXT//

  const handleReverseClick = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };

  const handleSliceClick = (event) => {
    let newText = text.slice(0, 100);
    setText(newText);
  };

  // DOWNLOAD FILE TEXT FUNCTION //

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
  };

  const [text, setText] = useState("");
  const [fWord, findWord] = useState("Enter Word to find");
  const [rWord, replaceWord] = useState("Enter Word to replace with");

  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-success mx-1" onClick={downloadTxtFile}>
          Download Text
        </button>
        <button className="btn btn-success mx-1" onClick={handleReverseClick}>
          Reverse Words
        </button>
        <button className="btn btn-success mx-1" onClick={handleSliceClick}>
          Convert to 100 characters
        </button>
        <button className="btn btn-success mx-1" onClick={handleClearClick}>
          Clear
        </button>

        <button className="btn btn-warning mx-1" onClick={speak}>
          Speak
        </button>
      </div>

      <div className="container my-3">
        <textarea
          className="form-control"
          value={fWord}
          onChange={handleFindChange}
          id="myBox"
          rows="3"
        ></textarea>
        <button className="btn btn-warning my-2" onClick={handleReplaceClick}>
          Replace
        </button>
        <textarea
          className="form-control"
          value={rWord}
          onChange={handleReplaceChange}
          id="myBox"
          rows="3"
        ></textarea>
      </div>

      <div className="container my-3">
        <h1>Your text summray</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <>{text}</>
      </div>
    </>
  );
}
