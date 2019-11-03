import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';




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
                        {/* <input id="commentInput"type="text" onChange={this.inputChangeHandler}></input> */}
                        <textarea id="commentInput"type="text" 
                        onChange={this.inputChangeHandler} name="message" rows="5" cols="30" 
                        placeholder="Say a few words about how your day went."></textarea>
                        
                        <Button variant="contained"onClick={this.compileFeedback} type= "submit">Next</Button>
                        </form>
                        
                    </header>
                    <br />
                </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(Comments));