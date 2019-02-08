import React from 'react';
const ct = require('countries-and-timezones');


export default class TimeComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            time : new Date(),
        }
    }

    componentWillMount(){
        this.tick();
    }

    tick(){
        var scope = this;
        setInterval(function(){
            scope.setState({time: new Date()});
        },6000);
    }

    render(){
        var country = this.props.country;
        const mxTimezones = ct.getTimezonesForCountry(country);
        var aestTime = this.state.time.toLocaleTimeString("en-US", {timeZone: mxTimezones[0].name,hour12: false})
        aestTime = aestTime.split(':');
        return(
            <div className="WeatherTime">
                <span>{aestTime[0]}</span>
                <span className="TimeSpan">{aestTime[1]}</span>
                <span className="TimeCity">{this.props.city}</span>
            </div>
     
        );
    }
}
