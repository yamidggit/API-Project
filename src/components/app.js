import React from 'react';
import {LocationDetailContainer} from './location_detail';
import {SearchBarsFormContainer} from './search_bars';
import {PlacesListContainer} from './places_list';
import {connect} from 'react-redux';

export class App extends React.Component {
    
    locationDetail(){
        if(this.props.selectPlace!==undefined && this.props.weather)
        {
            return <LocationDetailContainer />;
        }
    }
    render() {
       
        return (
            <div className="app">
                <h1>My Application</h1>
                <SearchBarsFormContainer />
                <PlacesListContainer/>
                {this.locationDetail()}
            </div>
        );
    }
}
function mapStateToProps(state) {
        
    return {
        selectPlace: state.appState.get('selectedPlace'),
        weather: state.appState.get('weather')
    };
}

export const AppContainer=connect(mapStateToProps)(App);