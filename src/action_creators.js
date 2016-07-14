export function newQuery(values){
    return {
        "type": 'NEW_QUERY',
        values
    };
}

export function fetchPlacesFoursquare() {
    return {"type": "FETCH_PLACES_FOURSQUARE"};
}

export function fetchedPlaces(data){
    return {
        "type": 'FETCHED_PLACES',
        data
    };
}
export function selectPlace(index){
    return {"type":'SELECT_PLACE',
           index 
    };
}
export function fetchOpenWeather() {
    return {"type": "FETCH_OPEN_WEATHER"};
}
export function fetchedOpenWeather(data){
    return {
        "type": 'FETCHED_OPEN_WEATHER',
        data
    };
}
