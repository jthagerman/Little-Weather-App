# Little Weather App [Link to Heroku Deployment](http://little-weather-app.herokuapp.com/)

![Main](https://github.com/jthagerman/Little-Weather-App/blob/main/public/screenshots/Screen%20Shot%202021-08-15%20at%2010.47.23%20PM.png)

## The Premise

This application was created during four days as my personal project as part of the curriculum of Fullstack Academy of Code.  This was an open ended assignment where I could build anything I wanted, with an emphasis put on one should try to implement a new technology. So my approach was:

* I wanted to make a clean, visually pleasing website, styled from scratch.

* Make a site that make calls to an external API.

* Experiment with a few node libraries, mainly I used chart.js.


## How I built It

So to get the weather data I used the free API from the National Weather service.  Using this is was probably the biggest bottleneck of the project.  The NWS api albeit easy to use, is rather unreliable, timing out constantly and doesn't actually provide much weather data.  It also uses Latitude and Longitude values as input, so I build by own databse of zipcodes and city names, that is queried so that my website can send in a request to the NWS. But its not that simple as the NWS also requires a 3 digit weather station code along with the Lat and Lng values, so you have to have call them to get those to in turn call them againto get the weather data.

![Website](https://github.com/jthagerman/Little-Weather-App/blob/main/public/screenshots/Screen%20Shot%202021-08-15%20at%2010.48.15%20PM.png)

### I used chart.js along side the weather data to create a few different types of charts to show the weather data.

## Mobile

All the styling was done by myself for the site, and for the first time I used media queries on my css rules taking in consideration on how the site would look on a small screen, it is far from perfect and some things are not yet finished but it was a learning experience for me and was a lot easier than I thought it would be, and was enjoyable to implement.

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)


![website](https://github.com/jthagerman/Little-Weather-App/blob/main/public/screenshots/Screen%20Shot%202021-08-15%20at%2010.48.29%20PM.png)

## So what would I had done differently?

* Used a different more reliable/faster API to get weather data from.  It would be way less complicated but as this is a small educational assigment and not production it was not necessary.

* Some of the components could be compartamentalized better, especially the main weather view component.  In some instances where I passed down props, that could of probably been done with the redux store.

* Implementing security features

* If keeping with the NWS server logging station codes so that next time a location is searched less API calls are needed.

* A proper parser needs to be written to turn weather statements into symbols, this brute for method used is poor.

![Website](https://github.com/jthagerman/Little-Weather-App/blob/main/public/screenshots/Screen%20Shot%202021-08-15%20at%2010.52.29%20PM.png)


## Stretch Features

* More account features, an actuall account page

* Tabs on the navbar of logged in users favorited locations

* More styling work


### Credits

* US Zip Code data is from the free file https://simplemaps.com/data/us-zips

* Background Images were freely sourced from https://pixabay.com/

