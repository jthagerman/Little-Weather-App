const { Sequelize } = require("sequelize");
const db = require("../db");

const UserLocation = db.define("userLocation", {
  zip: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    unique: true,
  },
  lat: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
  lng: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
  city: {
    type: Sequelize.STRING,
  },
  state_name: {
    type: Sequelize.STRING,
  },
});

module.exports = UserLocation;
