const fetch = require("node-fetch");

const searchController = {};

const token = "xtx6IVJ7HxQT59FY_Qxqo5dpo7zziGQKP4ErjCQYjZQ";

searchController.searchFunction = (req, res, next) => {
  fetch(
    `https://trefle.io/api/v1/plants/search?token=${token}&q=${req.body.query}&limit=3`
  )
    // common_name
    // image_url
    .then((res) => res.json())
    .then((data) => {
      res.locals.query = data;
    //   console.log(data);
      return next();
    })
    .catch((err) => {
      res.locals.query = err;
      console.log("ERROR IN CONTROLLER", err);
    });
};

module.exports = searchController;
