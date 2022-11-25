const { getAllRoutes } = require("../models/routes.model");

async function httpGetAllRoutes(req, res) {
  const query = req.query;
  try {
    const routes = await getAllRoutes(query);
    return res.send(routes);
  } catch (e) {
    console.error(e);
    return res
      .status(400)
      .send({
        error: true,
        error_desc: { query: JSON.stringify(query), msg: e },
      });
  }
}

module.exports = {
  httpGetAllRoutes,
};
