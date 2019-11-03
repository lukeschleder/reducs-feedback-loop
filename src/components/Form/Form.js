import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



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
                    <FormControl>
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        {this.props.label}
                        </InputLabel>
                        <Select onChange={this.inputChangeHandler}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                        <br/>
                        <Link to={this.props.route}> <Button variant="contained" type="button" onClick={this.compileFeedback}>Next</Button> </Link>
                    </FormControl>
                </header>
                <br />
            </div>

        );

    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Form);