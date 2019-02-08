import React from 'react'
import {
	connect
} from 'react-redux';
import {
	Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom'
import {capitals} from '../../cities';
import ListItem from '../ListItem';

class AddCities extends React.Component {

    constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            cityList:[],
            value:'',
            selectedCity:''
        }

    }
    
    handleSubmit(e) {
		e.preventDefault();
		const input = this.refs.city;
		if (!input.value.trim()) return;

        let cities = this.props.cities;
        cities.cities.push(this.state.selectedCity)
        input.value = '';
        this.setState({selectedCity:''});
        this.setState({cityList:[]});
    }
    
    
    findCities(event){
        const input = event.target.value.toUpperCase();
        this.setState({value:input})
        var cityList = [];
        // console.log(capitals);
        if (input.length > 0) {
        	let savedCities = this.props.cities.cities;
            for(var i = 0;i< capitals.length;i++){
                var element = capitals[i];
                // console.log(savedCities);
            if (element.city && element.city.toUpperCase().includes(input) && ! savedCities.includes(element.city)) {
                cityList.push(element.city);
                }
                if(cityList.length>=7)
                    break;
        	};
        }
        this.setState({cityList})

    }

    myfunction(city) {
        // e.preventDefault();
        this.setState({selectedCity:city})
    }
    

	render() {
        const{cityList} = this.state;

		return (
            <div className="container">
                <Link to = '/' > 
                    <i className = 'button_back fa fa-2x fa-chevron-left'></i>
                </Link>

               <div className = 'center_div' >
                    <form className="findCities" onSubmit={this.handleSubmit}>
                       <div className="searchBox">
                     
                        <input className="searchTextBox" value={this.state.value} onChange={(event)=>this.findCities(event)}  placeholder="Search city" ref="city" />
                        <i className = 'button_search fa fa-chevron-down'></i>

                        </div>
                        {
                            cityList.map(city=>{
                          return(
                            <div className='capitalItem' onClick={()=>{this.myfunction(city)}}>
                            <ListItem city={city} selectedValue={this.state.value}/>
                            </div>
                            )
                       })}
                       {this.state.selectedCity.length?
                       <input type='submit' className='theme_button' value='SAVE'/>: null
                    }
                    </form>
               </div>

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

export default withRouter(connect(mapStateToProps)(AddCities))
