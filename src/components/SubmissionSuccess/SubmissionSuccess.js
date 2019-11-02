import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';

class SubmissionSuccess extends Component {
        

    render() {
        return (
                <div className="Review">
                    <header className="Home-header">
                        <h1 className="Review-Title">Thank You!</h1>
                        <Link to="/"><button >Leave New Feedback</button></Link>
                    </header>
                    <br />
                </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(SubmissionSuccess));