import React from 'react';

function TextInputComponent() {
  let input;
  let response;
  let headlines = [];
  let matches = [];
  const btnClick = () => {
    headlines = [];
    input = document.getElementById('text').value;
    fetch("https://newsapi.org/v2/everything?q=" + input + "&apiKey=" + process.env.REACT_APP_API_KEY)
      .then((resp) => resp.json())
      .then((data) => {
        response = data;
        seperateTitles(data);
      });
  }

  function seperateTitles(obj) {
    for (let i = 0; i < obj.articles.length; i++) {
      headlines.push(obj.articles[i].title);
    }
    checkMatch();
  }

  function checkMatch() {
    matches = [];
    for (let i = 0; i < headlines.length; i++) {
      if (headlines[i].toLowerCase().includes(input.trim().toLowerCase())) {
        matches.push(response.articles[i]);
        console.log("We found a match: ");
        console.log("Title: " + headlines[i]);
        console.log("Author: " + response.articles[i].author);
        console.log("Source: " + response.articles[i].source.name);
      }
    }
  }
  return (
    <div>
      <input type="input" id="text"></input>
      <button onClick={btnClick}>Submit</button>
      {matches.map(item => <p>key={item.title} name={item.author}</p>)}
    </div>
  );
}

export default TextInputComponent;
