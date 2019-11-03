import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class SubmissionSuccess extends Component {
        
    clearFeedback = () => {
        this.props.dispatch({type: "CLEAR_FEEDBACK"});
    }

    render() {
        return (
                <div className="Review">
                    <header className="Home-header">
                        <h1 className="Review-Title">Thank You!</h1>
                        <Link to="/"><Button variant="contained"color="grey"onClick = {this.clearFeedback}>Leave New Feedback</Button></Link>
                    </header>
                    <br />
                </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(SubmissionSuccess));