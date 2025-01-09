import './App.css';

function App() {
  const btnClick = () => {
    console.log(document.getElementById('text').value)
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
