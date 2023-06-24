import "./App.css";

import UseState from "./components/1-useStateBasis/UseState";
import ChangeColor from "./components/1-useStateBasis/ChangeColor";
import UseStateWithArray from "./components/2-useStateWithArray/UseStateWithArray";

function App() {
  return (
    <div className="App">
      <h2>REACT HOOKS</h2>
      <p>
        The following ae the various react hooks in react to manage state and
        react lifecycle methods
      </p>
      <ul>
        <li>useState</li>
        <li>useEffect</li>
        <li>useContext</li>
        <li>useReducer</li>
        <li>useRef</li>
        <li>useMemo</li>
        <li>Custom Hooks</li>
      </ul>

      <UseState />
      <ChangeColor />
      <UseStateWithArray />
    </div>
  );
}

export default App;
