import logo from "./logo.svg";
import "./App.css";

function App() {
  function masterVersion1() {
    console.log("this is a function of masterversion1");
  }

  masterVersion1();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="master-version-1">This is on branch master version 1</p>
        <p>another content</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// add a new line comment before old one

// this is a old comment that has been changed

export default App;
