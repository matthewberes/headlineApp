import { useState } from 'react';
import React from 'react';
import './TextInputComponent.css'

function TextInputComponent() {
  let input;
  let response;
  let headlines = [];
  let matches = [];
  const [output, setOutput] = useState([])

  const btnClick = () => {
    input = document.getElementById('text').value;
    fetch("https://newsapi.org/v2/everything?q=" + input + "&apiKey=" + process.env.REACT_APP_API_KEY)
      .then((resp) => resp.json())
      .then((data) => {
        response = data;
        seperateTitles(data);
      });
  }

  function seperateTitles(obj) {
    headlines = []
    for (let i = 0; i < obj.articles?.length; i++) {
      headlines.push(obj.articles[i].title);
    }
    checkMatch();
  }

  function checkMatch() {
    matches = []
    for (let i = 0; i < headlines.length; i++) {
      if (headlines[i].toLowerCase().includes(input.trim().toLowerCase())) {
        matches.push(response.articles[i]);
        console.log("We found a match: ");
        console.log("Title: " + headlines[i]);
        console.log("Author: " + response.articles[i].author);
        console.log("Source: " + response.articles[i].source.name);
      }
    }
    setOutput(matches.map(item =>
      <div className="box">
        <p>{item.title}</p>
        <a href={item.url}>{item.source.name}</a>
      </div>
    ))
  }

  let count = <p><strong>{output.length} matches found:</strong></p>
  return (
    <div>
      <input type="input" id="text"></input>
      <button onClick={btnClick}>Submit</button>
      {output.length > 0 && count}
      {output}
    </div>
  );
}

export default TextInputComponent;
