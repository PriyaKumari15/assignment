import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import DataInput from './component/data';
import Result from './component/result';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <DataInput />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;