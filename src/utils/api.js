import fetch from 'isomorphic-fetch';
import { FoursquareSecrets, OpenWeatherMapSecrets, GoogleStaticMap} from './secrets.js';


 const getUrlFoursquare=(location, categoryId)=>{
    let clientId= FoursquareSecrets.ClientId; 
    let clientPassword= FoursquareSecrets.ClientPassword;
        
    let url=`https://api.foursquare.com/v2/venues/search?client_id=${clientId}&client_secret=${clientPassword}&query=${categoryId}&near=${location}&radius=100000&v=20160422`;
    return url;
  };

 const getUrlOpenWeatherMap=(city, country)=>{
    let clientId= OpenWeatherMapSecrets.Key; 
   
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${clientId}`;
    return url;
  };

export const listPlaces=(location, search)=>{
    let url= getUrlFoursquare(location, search);
    return fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((json)=>json.response.venues.slice(0,5));
};
     
export const OpenWeather=(city, country)=>{
    let url=getUrlOpenWeatherMap(city,country);
    return fetch(url, { method: 'GET' })
        .then((response) => response.json());
};
  
export const StaticGoogleMap= (city,lat,long)=>{
    let clientId= GoogleStaticMap.Key;
    let src=`https://maps.googleapis.com/maps/api/staticmap?center=${city}&zoom=13&size=400x400&maptype=roadmap&markers=%7Ccolor:red%7Clabel:1%7C${lat},${long}&key=${clientId}`;

    return src;
}; 

