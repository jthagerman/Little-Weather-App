const router = require("express").Router();
const {
  models: { User, UserLocation },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.delete("/favorites/:zip/:user", async(req,res,next) => {
  let zip = Number(req.params.zip);
  let user = Number(req.params.user);

  try {
    await UserLocation.destroy({
      where: {
        zip: zip,
        userId: user
      }
    })
    res.sendStatus(201);

  } catch (error) {
    next(error);
  }

})

router.post("/favorites", async (req, res, next) => {
  let data = req.body.params.query;
  let user = req.body.params.user;

  try {
    let newLocation = {
      zip: data.zip,
      lat: data.lat,
      lng: data.lng,
      city: data.city,
      state_name: data.state_name,
      userId: user,
    };
    let newFavorite = await UserLocation.create(newLocation);
    res.status(201);
    res.send(newFavorite)
  } catch (error) {
    next(error);
  }
});

router.get("/favorites", async (req, res, next) => {
  try {
    const user = Number(req.query.userId);
    const favorites = await UserLocation.findAll({
      where: {
        userId: user,
      },
    });
    res.json(favorites)
  } catch (error) {
    next(error)
  }
});
