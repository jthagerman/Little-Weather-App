const db = require("./db");

const User = require("./models/User");
const Location = require("./models/Location");
const UserLocation = require("./models/UserLocation");

User.hasMany(UserLocation);
UserLocation.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Location,
    UserLocation,
  },
};
