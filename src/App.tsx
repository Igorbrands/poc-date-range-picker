import "./App.css";
import { Router } from "react-router";
import Routes from "./routes";
import history from "./services/history";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <h1>Test Date Range</h1>
        <Link to="/date-picker">Date Picker</Link>
        <Link to="/date-range-picker">Date Range Picker</Link>
        <Link to="/date-range-horizontal">Date Range Horizontal</Link>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
