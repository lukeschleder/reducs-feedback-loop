import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Review extends Component {

    handleSubmit = (event) => {
      event.preventDefault();
      var today = new Date();
      console.log('Adding feedback', this.props.formReducer, today);
      axios.post('/feedback', this.props.formReducer,  )
        console.log('after post');
        
        
    }
        

    render() {
        return (
                <div className="Review">
                    <header className="Home-header">
                        <h1 className="Review-Title">Review</h1>
                        <ul>
                            <li>Feeling: {this.props.formReducer.feeling}</li>
                            <li>Understanding: {this.props.formReducer.understanding}</li>
                            <li>Supported: {this.props.formReducer.supported}</li>
                            <li>Comments: {this.props.formReducer.comment}</li>
                        </ul>
                        <button onClick={this.handleSubmit}>Submit</button>
                        <Link to="/">Next</Link>
                    </header>
                    <br />
                </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Review);