import React from 'react';
import './App.css';
// import MyComponent from "./MyComponent";
import Navbar from "./Navbar";
import Home from "./Home"
import Interests from "./Interests";
import Experience from "./Experience";
import Projects from "./Projects";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './Footer';

function App() {
  return (
    <div className="App">

      <Router>

      <Navbar title="dog"/>
        <Route path="/" exact component={Home} />
        <Route path="/interests" exact component={Interests} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/projects" exact component={Projects} />
        {/* <Home></Home> */}
      {/* <img src={logo} alt="logo" /> */}

        <Footer></Footer>

      </Router>
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
