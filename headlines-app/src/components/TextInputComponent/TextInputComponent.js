import { useState } from 'react';
import React from 'react';

function TextInputComponent() {
  let input;
  let response;
  let headliner = [];
  let matchy = [];
  // const [headlines, setHeadines] = useState([])
  // const [matches, setMatches] = useState([])
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
    headliner = []
    for (let i = 0; i < obj.articles.length; i++) {
      headliner.push(obj.articles[i].title);
    }
    checkMatch();
  }

  function checkMatch() {
    matchy = []
    for (let i = 0; i < headliner.length; i++) {
      if (headliner[i].toLowerCase().includes(input.trim().toLowerCase())) {
        matchy.push(response.articles[i]);
        console.log("We found a match: ");
        console.log("Title: " + headliner[i]);
        console.log("Author: " + response.articles[i].author);
        console.log("Source: " + response.articles[i].source.name);
      }
    }
    setOutput(matchy.map(item => <p><a href={item.url}>{item.source.name}</a></p>))
  }

  let testy = <p>{output.length} matches found:</p>
  return (
    <div>
      <input type="input" id="text"></input>
      <button onClick={btnClick}>Submit</button>
      {output.length > 0 && testy}
      {output}
    </div>
  );
}

export default TextInputComponent;
