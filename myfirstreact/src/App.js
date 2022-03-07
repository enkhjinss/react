import "./App.css";
import Grid from "./snake";

function App() {
  const array = [];
  for (let i = 0; i < 99; i++) {
    array.push(<Grid />)
  }
  return array.forEach((el , i) => {
    return console.log(el);
  });
}

export default App;
