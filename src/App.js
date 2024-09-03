import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>What word you wanna discover today?</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/martarfnogueira/"
            target="_blank"
            rel="noreferrer"
          >
            Marta Nogueira
          </a>{" "}
          as part of a project for SheCodes
        </footer>
      </div>
    </div>
  );
}

export default App;
