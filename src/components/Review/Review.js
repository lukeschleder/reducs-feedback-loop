import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class Review extends Component {

    handleSubmit = () => {
        console.log('Adding feedback', this.props.formReducer);
        axios.post('/feedback', this.props.formReducer)
        this.props.dispatch({ type: "CLEAR_FEEDBACK" });
        // this.props.history.push('/submissionsuccess');   
    }


    render() {
        return (
            <div className="Review">
                <header className="Home-header">
                    <h1 className="Review-Title">Review</h1>
                    <ul id="reviewList">
                        <li>Feeling: {this.props.formReducer.feeling}</li>
                        <li>Understanding: {this.props.formReducer.understanding}</li>
                        <li>Support: {this.props.formReducer.support}</li>
                        <li>Comments: {this.props.formReducer.comments}</li>
                    </ul>
                    <Link to="/submissionsuccess"> <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />} onClick={this.handleSubmit} >Submit</Button></Link>

                </header>
                <br />
            </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(Review));