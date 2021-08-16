# Little Weather App [Link to Heroku Deployment](http://little-weather-app.herokuapp.com/)

![Website](https://github.com/jthagerman/Little-Weather-App/blob/main/public/screenshots/Screen%20Shot%202021-08-15%20at%2010.47.23%20PM.png)

## The Premise

This application was created during four days as my personal project as part of the curriculum of Fullstack Academy of Code.  This was an open ended assignment where I could build anything I wanted, with an emphasis put on one should try to implement a new technology. So my approach was:

* I wanted to make a clean, visually pleasing website, styled from scratch.

* Make a site that make calls to an external API.

* Experiment with a few node libraries, mainly I used chart.js.


## How I build It

So to get the weather data I used the free API from the National Weather service.  Using this is was probably the biggest bottleneck of the project.  The NWS api albeit easy to use, is rather unreliable, timing out constantly and doesn't actually provide much weather data.  It also uses Latitude and Longitude values as input, so I build by own databse of zipcodes and city names, that is queried so that my website can send in a request to the NWS. But its not that simple as the NWS also requires a 3 digit weather station code along with the Lat and Lng values, so you have to have call them to get those to in turn call them againto get the weather data.

![Website](https://github.com/jthagerman/Little-Weather-App/blob/main/public/screenshots/Screen%20Shot%202021-08-15%20at%2010.49.36%20PM.png)

### I used chart.js along side the weather data to create a few different types of charts to show the weather data.

## Start

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)


### Heroku

1.  Set up the [Heroku command line tools][heroku-cli]
2.  `heroku login`
3.  Add a git remote for heroku:

[heroku-cli]: https://devcenter.heroku.com/articles/heroku-cli

* **If you are creating a new app...**

  1.  `heroku create` or `heroku create your-app-name` if you have a
      name in mind.
  2.  `heroku config:set JWT=<your secret here!>` to set a secret for JWT signing

Database Setup

  3.  `heroku addons:create heroku-postgresql:hobby-dev` to add
      ("provision") a postgres database to your heroku dyno (This creates your production database)

  4.  `heroku config:set SEED=true` to get heroku to sync and seed your database

  5.   note everytime your app restarts, the database tables will be dropped and re-created. To avoid this you can `config:unset SEED`


* **If you already have a Heroku app...**

  1.  `heroku git:remote your-app-name` You'll need to be a
      collaborator on the app.


Now, you should be deployed!




Improvements that should be done,
Further work on main weather react component could be broken down
Saving weather station codes to reduce calls to NWS servers
security, no route security
build an account settings page



Features:

search suggestions

favorite weather tabs
favorite magements
radar


If better api, radar, more data




Credits
US Zip Code data is from the free file https://simplemaps.com/data/us-zips
Background Images were freely sourced from https://pixabay.com/

