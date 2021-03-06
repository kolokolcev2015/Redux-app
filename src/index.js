import React from 'react';
    import {render} from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {compose, createStore} from "redux";
import {Reducer} from "./redux/Reducer";
import {Provider} from 'react-redux'


const store = createStore(
    Reducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

render(
    <Provider store={store}><App /></Provider>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
