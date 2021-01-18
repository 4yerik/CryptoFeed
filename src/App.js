import React from 'react';
import './App.css';
// import MyComponent from "./MyComponent";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import Advice from "./Pages/Advice";
import Summary from "./Pages/Summary";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <div className="view">
        <Router className="view">

          <Navbar title="Yeri Kim" />
          <Route path="/" exact component={Home} />
          <Route path="/advice" exact component={Advice} />
          <Route path="/summary" exact component={Summary} />
          <Footer></Footer>

        </Router>
      </div>

    </div>
  );
}

export default App;
