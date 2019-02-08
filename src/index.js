import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { fetchLocation } from './actions';

import App from './components/App/App';
// import "weathericons/css/weather-icons.min.css";
import "./css/weather-icons.css";

import './index.scss';
// import '../weather_icons/weather-icons.scss';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(fetchLocation());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
document.getElementById('root'));
serviceWorker.register();
