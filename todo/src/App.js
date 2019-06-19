import React from 'react';
import logo from './logo.svg';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import { combinedReducers } from './reducers/reducers'

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

function App() {
  return (
    <Provider store = {store}>
      
    </Provider>
  );
}


export default App;
