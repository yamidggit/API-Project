import React from 'react';
import {StaticGoogleMap} from '../utils/api.js';
import {connect} from 'react-redux';


class GoogleMap extends React.Component {
   
    render() {
        return (
            <div className="google-map">
                <img src={StaticGoogleMap(this.props.city,this.props.latitud,this.props.longitud)}></img>   
            </div>
        );
    }
}

function mapStateToProps(state) {
        
    let index=state.appState.get('selectedPlace');
    
    
    return {
        
        city: state.appState.get('places').get(index).get('location').get('city'),
        latitud: state.appState.get('places').get(index).get('location').get('lat'),
        longitud:state.appState.get('places').get(index).get('location').get('lng')
    };

}


export const GoogleMapContainer=connect(mapStateToProps)(GoogleMap);