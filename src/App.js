import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import "./styles/main.scss";

const NotFound = () => (
  <div>
    <h2>Sorry, nothing here</h2>
  </div>
);

const Home = () => (
  <div>
    <h2>Ready</h2>
  </div>
);

const Dashboard = (props) => (
  <div>
    <h2>Dashboard</h2>
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  </div>
);

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
        <NotFound default />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
