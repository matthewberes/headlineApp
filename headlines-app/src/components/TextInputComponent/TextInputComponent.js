import { useState } from 'react';
import React from 'react';

function TextInputComponent() {
  let input;
  let response;
  const [headlines, setHeadines] = useState([])
  const [matches, setMatches] = useState([])
  const [output, setOutput] = useState([])

  // let headlines = [];
  // let matches = headlines.map(item => <p>{item}</p>)
  // for (let i = 0; i < headlines.length; i++) {
  //   matches.push(headlines[i])
  // }
  const btnClick = () => {
    setHeadines([]);
    input = document.getElementById('text').value;
    fetch("https://newsapi.org/v2/everything?q=" + input + "&apiKey=" + process.env.REACT_APP_API_KEY)
      .then((resp) => resp.json())
      .then((data) => {
        response = data;
        seperateTitles(data);
      });
  }

  function seperateTitles(obj) {
    let temp = []
    for (let i = 0; i < obj.articles.length; i++) {
      temp.push(obj.articles[i].title);
    }
    setHeadines(temp)
    checkMatch();
  }

  function checkMatch() {
    setMatches([]);
    let temp = []
    for (let i = 0; i < headlines.length; i++) {
      if (headlines[i].toLowerCase().includes(input.trim().toLowerCase())) {
        temp.push(response.articles[i]);
        console.log("We found a match: ");
        console.log("Title: " + headlines[i]);
        console.log("Author: " + response.articles[i].author);
        console.log("Source: " + response.articles[i].source.name);
      }
    }
    setMatches(temp)
    setOutput(matches.map(item => <p>{item.title}</p>))
  }
  return (
    <div>
      <input type="input" id="text"></input>
      <button onClick={btnClick}>Submit</button>
      {output}
    </div>
  );
}

export default TextInputComponent;
