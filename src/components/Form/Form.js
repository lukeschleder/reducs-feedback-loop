import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



class Form extends Component {

    state = {
        input: 1,
    }


    inputChangeHandler = (event) => {
        this.setState({
            ...this.state,
            input: event.target.value
        });
    }

    compileFeedback = () => {
        this.props.dispatch({ type: this.props.type, payload: this.state.input });
    }

    render() {
        return (
            <div className="App">
                <header className="Home-header">
                    <h1 className="Feeling-title">{this.props.question}</h1>
                    <form>
                        <select onChange={this.inputChangeHandler}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <Link to={this.props.route}> <button type="button" onClick={this.compileFeedback}>Next</button> </Link>
                    </form>
                </header>
                <br />
            </div>

        );

    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Form);