import React from "react";
import Form from './Form.js'


export default function Bmi() {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "BMIdata.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  return (
    <div >
      <Form />
      <input id="myInput" />
      <button onClick={downloadTxtFile}>Save today's medical results</button>
    </div>
  );
}
