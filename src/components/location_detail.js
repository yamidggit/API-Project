import React from 'react';
import{GoogleMapContainer} from './google_map';
import {connect} from 'react-redux';


export class LocationDetail extends React.Component {
    
    render() {
        
        return (
            <div className="location-detail">
               <div >
                    <ul> Current weather for {this.props.name}
                        <li> Temperature: {this.props.temperature} Kelvin</li> 
                        <li> Pressure: {this.props.pressure} hPa</li> 
                        <li> Humidity: {this.props.humidity} %</li> 
                    </ul>
                    <GoogleMapContainer />
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
        
    let index=state.appState.get('selectedPlace');
    
    return {
        
        name: state.appState.get('places').get(index).get('name'),
        temperature: state.appState.get('weather').get('main').get('temp'),
        pressure: state.appState.get('weather').get('main').get('pressure'),
        humidity: state.appState.get('weather').get('main').get('humidity')
    
    };

}

export const LocationDetailContainer=connect(mapStateToProps)(LocationDetail);