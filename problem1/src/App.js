import React, { useState } from "react";
import './App.css'
function CharacterCounter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const countCharacters = () => {
    const sanitizedInput = input.replace(/\s/g, "").toUpperCase(); // Remove spaces and convert to uppercase
    const charMap = {};
    const result = [];

    for (const char of sanitizedInput) {
      if (!charMap[char]) {
        charMap[char] = 0;
      }
      charMap[char]++;
    }

    // Maintain the order of first occurrence
    for (const char of sanitizedInput) {
      if (result.find((item) => item.char === char) === undefined) {
        result.push({ char, count: charMap[char] });
      }
    }

    setOutput(result);
  };

  return (
    <div className="container">
      <h2>Character Counter</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter a string"
        value={input}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={countCharacters} className="button">Count Characters</button>
      <div>
        {output.length > 0 && (
          <div>
            <h3>Output:</h3>
            <ul>
              {output.map((item, index) => (
                <li key={index}>
                  {item.char}-{item.count}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterCounter;
