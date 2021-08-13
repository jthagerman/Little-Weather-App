const { Sequelize } = require('sequelize');
const db = require('../db')

const Location = db.define('location', {
  zip: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    unique: true,
    primaryKey: true,
  },
  lat: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
  lng:{
    type: Sequelize.FLOAT,
    defaultValue: 0,

  },
  city: {
    type: Sequelize.STRING,

  },
  state_name: {
    type: Sequelize.STRING

  },
  county_name: {
    type: Sequelize.STRING
  },
  timezone: {
    type: Sequelize.STRING

  },
  cwa: {
    type: Sequelize.STRING
  }


})







module.exports = Location
