import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import XPage from "./pages/XPage";
import XPageTwo from "./pages/XPageTwo"
import XCollection from "./pages/XCollection"
import XNoMatch from "./pages/XNoMatch";
import { XNav } from "./components/XNav";

const App = () => (
  <BrowserRouter>
    <div>
      <XNav />
      <Switch>
        <Route exact path="/" component={XPage} />
        <Route exact path="/XPageTwo" component={XPageTwo} />
        <Route exact path="/XCollection/:id" component={XCollection} />
        <Route component={XNoMatch} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
