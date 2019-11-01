import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
//importing components
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <Route path="/" exact component={Home} />
          <Route path="/Feeling" exact component={Feeling} />
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(App);
