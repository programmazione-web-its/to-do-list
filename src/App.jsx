import "./App.css";
import logo from "./assets/logo.png";

import List from "./components/List";
import HelloWorld from "./components/HelloWorld";
import Button from "./components/Button"

const listItems = [
  "List item 1",
  "List item 2",
  "List item 3",
  "List Item 4",
  "List Item 5",
];

function consoleClick() {
  console.log("Pulsante cliccato")
}

function altertSaluto(saluto) {
  alert(saluto)
}

function App() {
  return (
    <div>
      <div>
        <img src={logo} alt="Logo della mia app" />
        <h1>La mia To do list</h1>
      </div>
      <HelloWorld>
        <h1>Ciao mondo!</h1>
        <h4>Questo è un title 4</h4>
        <p>Questo è un paragrafo</p>
        <div>Questo è un div</div>
         <List listElements={listItems} />
      </HelloWorld>
      <Button title="il mio pulsante" handleClick={consoleClick} />
      <Button title="Saluta" handleClick={() => altertSaluto('Ciao Antonio!')} />
     
    </div>
  );
}

export default App;
