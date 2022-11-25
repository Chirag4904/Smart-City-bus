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

const route2 = {
	id: 2,
	source: {
		name: "IGI Airport",
		lat: 28.556554,
		lng: 77.086705,
		segment: 2,
	},
	destination: {
		name: "Shahbad Railway Station",
		lat: 28.559988,
		lng: 77.071612,
		segment: 2,
	},
	waypoints: [
		{
			name: "Aerocity",
			lat: 28.555309,
			lng: 77.121467,
			segment: 2,
		},
		{
			name: " Ajmer Road",
			lat: 28.55091,
			lng: 77.129776,
			segment: 2,
		},
		{
			name: "Mahipal pur village",
			lat: 28.546714,
			lng: 77.124391,
			segment: 2,
		},
		{
			name: "Radisson Blu Plaza",
			lat: 28.543151,
			lng: 77.118803,
			segment: 2,
		},
		{
			name: "Ambience Mall Road",
			lat: 28.505244,
			lng: 77.095012,
			segment: 2,
		},
		{
			name: "City Affairs Garden",
			lat: 28.503948,
			lng: 77.06875,
			segment: 2,
		},
		{
			name: "Link Road",
			lat: 28.545567,
			lng: 77.060391,
			segment: 2,
		},
	],
	connections: [
		{
			to: "segment2",
			routeId: 2,
		},
	],
};

let routes = [route1, route2];

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
	const resp = await routesDatabase.find(query);
	console.log(resp);
	return resp;
}

module.exports = {
	loadRoutesData,
	getAllRoutes,
};
