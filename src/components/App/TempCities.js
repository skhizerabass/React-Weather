import React from 'react'
import {
	connect
} from 'react-redux';

import {
	Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom'
import WeatherCity from '../WeatherCity/WeatherCity';


class CitiesListView extends React.Component {

	render() {
        const{cities} = this.props.cities;

		return (
			
			<div className = 'center_div' >
                {cities.map(city => <WeatherCity city={city}/>)}
                    <Link to = '/addCities' > 
                        <i className = 'button_add fa fa-2x fa-plus'></i>
                    </Link>
			</div>

		)
	}

}
const mapStateToProps = (state) => {
	const { cities } = state;

	return {
		cities
	};
};

export default withRouter(connect(mapStateToProps)(CitiesListView))
