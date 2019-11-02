import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Review extends Component {
    render() {
        return (
                <div className="Review">
                    <header className="Home-header">
                        <h1 className="Review-Title">Review</h1>
                        <ul>
                            <li>Feelings: {this.props.feeling}</li>
                        </ul>
                        <Link to="/">Next</Link>
                    </header>
                    <br />
                </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Review);