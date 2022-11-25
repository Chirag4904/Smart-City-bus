const routesDatabase = require("./routes.mongo");

const route1 = {
  id: 1,
  source: {
    name: "Sector 42-43",
    lat: 28.457274,
    lng: 77.096744,
    segment: 1,
  },
  destination: {
    name: "Sector 54",
    lat: 28.432422,
    lng: 77.104986,
    segment: 1,
  },
  waypoints: [
    {
      name: "Huda City Center",
      lat: 28.458108,
      lng: 77.071816,
      segment: 1,
    },
    {
      name: "Bhagwan Mahavir Marg",
      lat: 28.446371,
      lng: 77.0757,
      segment: 1,
    },
    {
      name: "Ardee Mall",
      lat: 28.446661,
      lng: 77.080147,
      segment: 1,
    },
    {
      name: "Tau Devi Lal Biodiversity Park",
      lat: 28.430097,
      lng: 77.091219,
      segment: 1,
    },
    {
      name: "Rajesh Pilot Marg",
      lat: 28.417403,
      lng: 77.091204,
      segment: 1,
    },
    {
      name: "Sector 55-56",
      lat: 28.419956,
      lng: 77.105396,
      segment: 1,
    },
  ],
  connections: [
    {
      to: "segment2",
      routeId: 2,
    },
  ],
};

let routes = [route1];

async function saveRoute(route) {
  try {
    await routesDatabase.findOneAndUpdate(
      {
        id: route.id,
      },
      route,
      { upsert: true }
    );
  } catch (err) {
    console.error(`Could not save route ${err}`);
  }
}

async function loadRoutesData() {
  routes.map(async (route) => {
    const response = await saveRoute(route);
    console.log(response);
  });
}

async function getAllRoutes(query) {
  const resp = await routesDatabase.findOne(query);
  console.log(resp);
  return resp;
}

module.exports = {
  loadRoutesData,
  getAllRoutes,
};
