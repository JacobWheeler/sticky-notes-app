import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'semantic-ui-react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
);
