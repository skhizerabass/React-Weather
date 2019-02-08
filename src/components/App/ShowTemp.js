import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather  } from '../../actions'
import Loading from '../Loading/Loading';
import { withRouter,Link } from 'react-router-dom'
import TimerComponent from '../TimeCity/TimeCity';
import WeatherTemp from '../WeatherTemp/WeatherTemp';
class Weather extends React.Component {


	componentWillMount(){
		const {city} = this.props.match.params;
		// console.log(this.props.match.params.city);
		if(city){
			this.props.dispatch(fetchWeather(`q=${city}`));
		}
	}

	render() {
		
		const { weather } = this.props;
		// console.log(isFetching);
				if (weather.error) {
			return (
				<div className="container">
				<Link to = '/' > 
					<i className = 'button_back fa fa-2x fa-chevron-left'></i>
				</Link>
			<div className="WeatherDiv">
				<p>Failed to get data: {weather.error}</p>
			</div>
			</div>
			);
		}

		if (!weather.current) {
			return (
				<div className="container">
				<Link to = '/' > 
					<i className = 'button_back fa fa-2x fa-chevron-left'></i>
				</Link>
			<div className="WeatherDiv">
				<Loading />
				</div>
				</div>
			);
		}

		const icon = weather.current.weather[0];
		// console.log(icon);
		var className = "";
		if(icon.icon.includes('d'))
			className = "wi wi-owm-day-"+icon.id;
		else
			className = "wi wi-owm-night-"+icon.id;
		


		return (
			<div className="container">
				<Link to = '/' > 
					<i className = 'button_back fa fa-2x fa-chevron-left'></i>
				</Link>
			<div className="WeatherDiv">
				<div className="row">
				<div className="col-sm order-sm-2 ">
					<div className="WeatherIcon">
						<TimerComponent time={weather.current.dt} 
							city={weather.current.name}
						country={weather.current.sys.country}/>
					</div>
					</div>
					<div className="col-sm order-sm-1">
					<div className="WeatherIcon WeatherIconMargin" >
						<i className={className}></i>
						<span className='marginTop'>{icon.description}</span>

					</div>

					</div>
					<div className="col-sm order-sm-12">
						<WeatherTemp temperature={weather.current.main.temp} 
							sunrise = {weather.current.sys.sunrise}
							sunset = {weather.current.sys.sunset}
							country={weather.current.sys.country}
						/>	
					</div>
				</div>
			</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { location, weather } = state;

	return {
		location,
		weather
	};
};

export default withRouter(connect(mapStateToProps)(Weather))
