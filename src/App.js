import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import "./styles.css";
import Sucess from "./Sucess";

function App() {
  const [FireInitialized, setFireInitialized] = useState(false);
  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFireInitialized(val);
    });
  }, []);

  return (
    <>
      {FireInitialized !== false && (
        <div className="App">
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/sucess" component={Sucess} />
            </Switch>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
