import fetch from 'isomorphic-fetch';

const BASE_URL = 'http://api.openweathermap.org/data/2.5';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const REQUEST_WEATHER_FAILED = 'REQUEST_WEATHER_FAILED';

const APP_ID = '2ecc38b6399b67e99e5a6c97147249ff';

export function requestWeather() {
	return {
		type: REQUEST_WEATHER
	};
}

export function requestWeatherFailed(error) {
	return {
		type: REQUEST_WEATHER_FAILED,
		error
	};
}

export function receiveWeather(json) {
	return {
		type: RECEIVE_WEATHER,
		payload: {
			json
		}
	};
}


export function fetchWeather(params) {
	const url = `${BASE_URL}/weather?${params}&units=metric&appid=${APP_ID}`;

	return function (dispatch) {
		dispatch(requestWeather());

		return fetch(url)
			.then(response => response.json())
			.then(json => dispatch(receiveWeather(json)))
			.catch(error => dispatch(requestWeatherFailed(error.toString())));
	};
}


export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

export function requestLocation() {
	return {
		type: REQUEST_LOCATION
	};
}

export function receiveLocation(location) {
	return {
		type: RECEIVE_LOCATION,
		payload: {
			location
		}
	};
}

export function fetchLocation() {
	return function (dispatch) {
		
		if (navigator.geolocation) {			
			dispatch(requestLocation());
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			console.log('navigator.geolocation not supported.');
		}

		function success(position) {
			const { latitude, longitude } = position.coords;
			dispatch(receiveLocation({ latitude, longitude }));
		}

		function error(error) {
			console.error(error);
		}
	}
}

export const ADD_CITY = 'ADD_CITY';


export function addCity(cities){
	return {
		type: ADD_CITY,
		payload:{
			cities
		}
	}
}