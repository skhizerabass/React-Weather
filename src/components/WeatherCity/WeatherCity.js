import React from 'react';
import {PropTypes} from 'prop-types'
import {
	Link
} from "react-router-dom";

const WeatherCity = ({ city }) =>
 {
	var to =  '/ShowWeather/'+city;
	return(

 	<div>
	 	<Link to = {to} > 
			<h5 className='capital'>{city}</h5>
		</Link>
	</div>
 )
 };

WeatherCity.propTypes = {
	city: PropTypes.string
};

export default WeatherCity; 