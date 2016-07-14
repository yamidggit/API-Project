## Packages Included

Build: Webpack, Babel (es2015 and React), Sass loaders, webpack-dev-server, react-hot-loader

Test: Mocha, Chai, Enzyme

Front-end: React, React-Dom

## How to Run Things

Install all dependencies:

```
npm install
```

Run webpack:

```
npm run webpack
```

Automatically run webpack when files change:

```
npm run webpack:watch
```

Run tests:

```
npm run test
```

Run tests automatically when files change:

```
npm run test:watch
```

Run webpack-dev-server (`master` branch is configuration for Cloud9. `local` branch has configuration for running on localhost).

You don't need to run `webpack:watch` if you are running the dev server.

```
npm run webpack-dev-server
```

*Application details:

A simple front-end application that uses the Foursquare API, the OpenWeatherMap API, and the Google Maps API to build 
an app that has the following workflow:

-Users have two text fields to enter data into. One field is for a search query ("restaurant", "park', "taco") 
and the other field is for a location (85282, "Tempe, AZ").
-After hitting submit, a list of the top 5 possible locations will appear. The locations should be within 
100,000km of the location they entered.
-The user selects one of the locations and the following happen:
    The item in the list is highlighted (color and/or background-color change)
    The current weather for the city where the place is located is displayed (from OpenWeatherMap)
    A Google Map for the location is displayed
    
    
    
Note: OpenWeatherMap's API requires users to pay for https access. If you don't want to pay 
you can use the http://... address. Your browser will refuse to run the request if you visit 
your Cloud9 application using http, so make sure to change https://___.c9users.io/ to http://___.c9users.io/.