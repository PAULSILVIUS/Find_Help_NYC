import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import FindTherapist from "./routes/FindTherapist";
import Update from "./routes/Update";


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/therapists/:id" component={FindTherapist} />
          <Route exact path="/therapists/:id/update" component={Update} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
