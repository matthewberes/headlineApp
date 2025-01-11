import './App.css';

function App() {
  const btnClick = async () => {
    fetch("https://newsapi.org/v2/everything?q=" + document.getElementById('text').value + "&apiKey=" + process.env.REACT_APP_API_KEY)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
      })
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
