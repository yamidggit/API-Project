import 'babel-polyfill'; // because we are using generators
import { call, put, select} from 'redux-saga/effects';
import { listPlaces, OpenWeather} from '../utils/api';
import { takeLatest } from 'redux-saga';
import {fetchedPlaces, fetchedOpenWeather, fetchPlacesFoursquare, fetchOpenWeather } from '../action_creators';

const getquery = (state) => state.appState.get('query');
const getlocation = (state) => state.appState.get('location');
const index=(state) => state.appState.get('selectedPlace');
const getcity = (state) => state.appState.get('places').get(index(state)).get('location').get('city');

const getcountry = (state) => state.appState.get('places').get(index(state)).get('location').get('country');

export function* OnNewQuery() {
    yield put(fetchPlacesFoursquare());
}

export function* onFetchPlacesFoursquare() {
    let query=yield select(getquery);
    let location=yield select(getlocation);
    const data = yield call(listPlaces, location, query);
    yield put(fetchedPlaces(data));
}

export function* onSelectPlace(){
    yield put(fetchOpenWeather());
}

export function* onFetchOpenWeather() {
    
    let city=yield select(getcity);
    let country= yield select(getcountry);
    
    const data = yield call(OpenWeather, city, country);
    yield put(fetchedOpenWeather(data));
}

//watchActions
//When we yield an array of effects, the generator is blocked until all the
//effects are resolved or as soon as one is rejected
export default function*() {
    yield [takeLatest('NEW_QUERY', OnNewQuery),
        takeLatest('SELECT_PLACE', onSelectPlace),
        takeLatest('FETCH_PLACES_FOURSQUARE', onFetchPlacesFoursquare),
        takeLatest('FETCH_OPEN_WEATHER', onFetchOpenWeather)];
}