import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import { storeFactory } from './reducers';

const initialState = {
    users: [],
    events: {},
    isLoading: true
};

export const store = storeFactory(initialState);

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

store.subscribe(render);
render();
