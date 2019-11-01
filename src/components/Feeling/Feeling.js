import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



class Feeling extends Component {

    state = {
        feedback: {
            feeling: 0,
        }
    }
    
    compileFeedback = () => {
        this.props.dispatch({type: "FEELING_INFORMATION", payload: this.state.feedback});
        this.setState({
            feedback: {
                feeling: 0,
            }
        })
    }

    render() {
        return (
                <div className="App">
                    <header className="Home-header">
                        <h1 className="Feeling-title">How are you feeling today?</h1>
                        <form>
                        <input onChange={this.updateState}type="number" name="quantity" min="1" max="5"></input>
                        <button type="button" onClick={this.compileFeedback}>Next</button>
                        </form>
                    </header>
                    <br />
                    {JSON.stringify(this.state, null, 2)}
                    <pre>{JSON.stringify(this.props.feelingReducer, null, 2)}</pre>
                </div>
                
        );
        
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Feeling);