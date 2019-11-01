import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
                <div className="App">
                    <header className="Home-header">
                        <h1 className="Home-title">Home</h1>
                        <p>Thank you for being a part of this Academy!  Please submit your feedback on the next page.</p>
                        <Link to="/feeling">Next</Link>
                    </header>
                    <br />
                </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Home);