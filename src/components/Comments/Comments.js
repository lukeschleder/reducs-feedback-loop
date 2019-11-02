import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';




class Comments extends Component {

    state = {
        input: '',
    }
    
    
    inputChangeHandler = (event) => {
        this.setState({
            ...this.state,
            input: event.target.value
        });
    }
    
    compileFeedback = () => {
        this.props.dispatch({ type: "COMMENT_INFORMATION", payload: this.state.input });
        console.log(this.props);
        this. props.history.push('/review');
    }

    render() {
        return (
                <div className="Comments">
                    <header className="Comments-header">
                        <h1 className="Comments-Title">Comments</h1>
                        <form onSubmit={this.compileFeedback}>
                        <input type="text" onChange={this.inputChangeHandler}></input>
                        
                        <button onClick={this.compileFeedback} type= "submit">Next</button>
                        </form>
                        
                    </header>
                    <br />
                </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(Comments));