import "./App.css";
import { Route, Switch } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";

function App() {
  return (
    <div className="container">
      <h1>GraphQL Test Site</h1>

      <Switch>
        <Route exact path="/" component={Launches} />
        <Route path="/launch/:flight_number" component={Launch} />
      </Switch>
    </div>
  );
}

export default App;
