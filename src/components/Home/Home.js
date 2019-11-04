import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="Home-header">
                    <h1 className="Home-title">Daily Feedback</h1>
                    <p>Please submit your feedback on the next page.</p>
                    <Link to="/feeling"><Button color="primary" variant="contained">Begin Feedback</Button></Link>
                </header>
            </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Home);