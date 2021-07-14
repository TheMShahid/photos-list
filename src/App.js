import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";

const HatePage = () => (
  <div>
    <h1>this is hats page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hatepage" component={HatePage} />
      </Switch>
    </div>
  );
}

export default App;
