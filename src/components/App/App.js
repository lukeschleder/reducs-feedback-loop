import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
//importing components
import Home from '../Home/Home';
import Form from '../Form/Form';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';


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
          <Route exact path="/feeling" render={()=> <Form type= "FEELING_INFORMATION" question= "How are you feeling today?" route= "/understanding"/>} />
          <Route exact path="/understanding" render={()=> <Form type= "UNDERSTANDING_INFORMATION" question= "How well are you understanding the content?" route= "/supported"/>}/>
          <Route exact path="/supported" render={()=> <Form type= "SUPPORTED_INFORMATION" question= "How well are you being supported?" route= "/comments"/>}/>
          <Route path="/comments" exact component={Comments}/>
          <Route path="/review" exact component={Review} />
          <pre>{JSON.stringify(this.props.formReducer, null, 2)}</pre>
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(App);
