import React from 'react';
const ct = require('countries-and-timezones');

export default class WeatherTemp extends React.Component{
	render(){
	
	var country = this.props.country;
	const mxTimezones = ct.getTimezonesForCountry(country);

	var sunrise = this.props.sunrise;
	var sunset = this.props.sunset;

	sunrise = new Date(sunrise*1000).toLocaleTimeString("en-US", {timeZone: mxTimezones[0].name})
	sunset = new Date(sunset*1000).toLocaleTimeString("en-US", {timeZone: mxTimezones[0].name})
	
	return(
	<div className="WeatherIcon">
		<div className="WeatherTime">
		<div className="TempDiv">
			<i className="wi wi-fw wi-thermometer TimeIconMargin"> </i> <span className="TimeSpanMarginLeft">{this.props.temperature}</span>
		</div>
		<div className="TempDiv">
			<i className="wi wi-fw wi-sunrise TimeIconMargin"> </i> <span className="TimeSpanMarginLeft">{sunrise}</span>
		</div>
		<div className="TempDiv">
			<i className="wi wi-fw wi-sunset TimeIconMargin"> </i> <span className="TimeSpanMarginLeft">{sunset}</span>
		</div>
		</div>
	</div>
	);

};
}
