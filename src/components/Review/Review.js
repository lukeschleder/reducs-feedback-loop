import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';

class Review extends Component {

    handleSubmit = (event) => {
    //   event.preventDefault();
      console.log('Adding feedback', this.props.formReducer);
      axios.post('/feedback', this.props.formReducer,  )
        console.log('after post');
        alert("Your feedback is appreciated");
        
        
    }
        

    render() {
        return (
                <div className="Review">
                    <header className="Home-header">
                        <h1 className="Review-Title">Review</h1>
                        <ul id = "reviewList">
                            <li>Feeling: {this.props.formReducer.feeling}</li>
                            <li>Understanding: {this.props.formReducer.understanding}</li>
                            <li>Support: {this.props.formReducer.support}</li>
                            <li>Comments: {this.props.formReducer.comments}</li>
                        </ul>
                        <button onClick={this.handleSubmit} >Submit</button>
                        <Link to="/">Next</Link>
                    </header>
                    <br />
                </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(Review));