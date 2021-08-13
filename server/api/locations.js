const router = require("express").Router();
const { Sequelize } = require("sequelize");
const {
  models: { Location },
} = require("../db");
module.exports = router;

const filter = (list) => {
  let results = [];
  let indexes = [];
  list.forEach((element, index) => {
    if (!results.includes(`${element.city},${element.state_name}`)) {
      indexes.push(index);
      results.push(`${element.city},${element.state_name}`);
    }
  });
  list = list.filter((element, index) => {
    if (indexes.includes(index)) return element;
  });
  return list.length > 25 ? list.slice(0, 25) : list;
};

router.get("/", async (req, res, next) => {
  let query = req.query.query || "";

  //not a zip code
  if (isNaN(query)) {
    try {
      query = query.toLowerCase().trim();
      let locations = await Location.findAll({
        where: {
          city: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("city")),
            "LIKE",
            "%" + query + "%"
          ),
        },
        limit: 50,
      });

      locations = filter(locations);

      res.json(locations);
    } catch (err) {
      next(err);
    }
  } else {
    try {
      let zipCode = Number(query);
      let location = await Location.findOne({zip: zipCode});
      res.json(location);
    } catch (error) {
      next(error);
    }
  }
});

//get zip code
router.get("/:zip", async (req, res, next) => {
  try {
    let zipNum = Number(req.params.zip);
    const locations = await Location.findOne({
      zip: zipNum
    });
    res.json(locations);
  } catch (err) {
    next(err);
  }
});
