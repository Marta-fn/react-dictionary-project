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
        <footer>Coded by Marta Nogueira</footer>
      </div>
    </div>
  );
}

export default App;
