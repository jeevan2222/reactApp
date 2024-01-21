import "./App.css";
import { Link } from "react-router-dom";

import Body from "./Components/Body";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {" "}
          <Link to={"/"}>Home </Link>
        </div>
        <div>Proudcts</div>
        <div>
          {" "}
          <Link to={"/about"}>Contact Us</Link>
        </div>
        <div>
          {" "}
          <Link to={"/pay"}>Items </Link>
        </div>
        <div>Call</div>
      </header>
    </div>
  );
}

export default App;
