import React from 'react';
import {connect} from 'react-redux';
import {selectPlace} from '../action_creators';


class PlacesList extends React.Component {
   
    list(){
        
        if(this.props.places){
            return(
                <ul className= "list"> Best {this.props.query} near {this.props.location}
                    {this.props.places.map((place, index)=>
                        <li className ={place.get('selected')? "selectedPlace": "notSelectedPlace" }
                            key={index}
                            onClick={()=>{this.props.selectedPlace(index++)}}>
                            {place.get('name')} 
                        </li>)}
                </ul>
            );
        }
    }
   
    render() {
       
        return (
            <div className="placeList">
                {this.list()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        query: state.appState.get('query'),
        location: state.appState.get('location'),
        places:state.appState.get('places'),
        
    };
}
function mapDispatchToProps(dispatch){
    
    return{
        selectedPlace: (place) => {
            dispatch(selectPlace(place));
        }
    };
}


export const PlacesListContainer=connect(mapStateToProps, mapDispatchToProps)(PlacesList);