import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const formReducer = (state = {}, action) => {
    console.log("state",state);
    console.log("payload",action.payload);
    var today = new Date();
    
    if(action.type === "FEELING_INFORMATION"){
        return {...state, feeling: action.payload};
    } else if (action.type === "UNDERSTANDING_INFORMATION"){
        return {...state, understanding: action.payload};
    } else if (action.type === "SUPPORTED_INFORMATION"){
        return {...state, supported: action.payload, date: today};
    } else if (action.type === "COMMENT_INFORMATION"){
        return {...state, comment: action.payload};
    }
    return state;
 }



const storeInstance = createStore(
    combineReducers({
        formReducer
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
document.getElementById('root'));

