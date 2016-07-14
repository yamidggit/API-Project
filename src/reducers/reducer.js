import { Map, fromJS} from 'immutable';

const setQuery = (currentState, newValues) => {
   
    const newState = new Map({"query":newValues.query, "location":newValues.location});
    return currentState.merge(newState);
};

const setSelectedPlace = (currentState, index) => {
    const newState = new Map({"selectedPlace":index});
    let places = currentState.get('places');
    places = places.map((p)=>p.set('selected', false));
    
    const oldPlace=places.get(index);
    const newPlace=oldPlace.set('selected', true);
    const newPlaces= places.set(index, newPlace);
    
    return currentState.merge({"places": newPlaces},newState);
    
};

const setPlaces = (currentState, newPlaces) => {
    newPlaces=fromJS(newPlaces);
    
    const newState=new Map({'places':newPlaces});
    return currentState.merge(newState);
};

const setWeather=(currentState, weather) => {
    weather=fromJS(weather);
    const newState=new Map({'weather':weather});
    return currentState.merge(newState);
    
};


export default function(currentState = new Map(), action) {
    switch(action.type) {
        case 'NEW_QUERY':
            return setQuery(currentState, action.values);
        case 'SELECT_PLACE':
            return setSelectedPlace(currentState, action.index);
        case 'FETCHED_PLACES':
            return setPlaces(currentState, action.data);
        case 'FETCHED_OPEN_WEATHER':
            return setWeather(currentState, action.data);
    }

    return currentState;
}