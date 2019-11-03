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
                    <p>Please submit your feedback on the next page understanding that 1 is anxious and 5 is competent. 
                        Keep in mind that all scores have a default value of 1.</p>
                    <Link to="/feeling"><Button color="primary" variant="contained">Begin Feedback</Button></Link>
                </header>
            </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Home);