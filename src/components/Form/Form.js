import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



class Form extends Component {

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
        if (this.state.input === '' || this.state.input < 1 || this.state.input > 5) {
            alert('Invalid input, please select a number 1-5');
        } else {
            this.props.dispatch({ type: this.props.type, payload: this.state.input });
            this.props.history.push(this.props.route);
        }
    }

    render() {
        return (
            <div className="App">
                <header className="Home-header">
                    <h1 className="Feeling-title">{this.props.question}</h1>
                    <FormControl>
                        <InputLabel shrink id="shrinkin">
                            {this.props.label}
                        </InputLabel>
                        <Select onChange={this.inputChangeHandler}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                        <br />
                        <br />
                        <Button variant="contained" type="button" onClick={this.compileFeedback}>Next</Button>
                    </FormControl>
                </header>
                <br />
            </div>

        );

    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(Form));