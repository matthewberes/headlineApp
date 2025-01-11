import './App.css';

function App() {
  let response;
  let headlines = [];
  const btnClick = () => {
    fetch("https://newsapi.org/v2/everything?q=" + document.getElementById('text').value + "&apiKey=" + process.env.REACT_APP_API_KEY)
      .then((resp) => resp.json())
      .then((data) => {
        response = data;
        seperateTitles(data)
      })
  }

  function seperateTitles(obj) {
    for (let i = 0; i < obj.articles.length; i++) {
      headlines.push(obj.articles[i].title);
    }
  }

  return (
    <div>
      <h1>Headline Verifier</h1>
      <input type="input" id="text"></input>
      <button onClick={btnClick}>Submit</button>
    </div>
  );
}

export default App;
