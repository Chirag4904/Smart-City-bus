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

const route3 = {
	id: 3,
	source: {
		name: "The Close South",
		lat: 28.412328,
		lng: 77.074200,
		segment: 3,
	},
	destination: {
		name: "FabIndia OverSeas",
		lat: 28.422473,
		lng: 77.053494,
		segment: 3,
	},
	waypoints: [
		{
			name: "CK Birla Hospital",
			lat: 28.423415,
			lng: 77.061244,
			segment: 3,
		},
		{
			name: "Huda Colony",
			lat: 28.434445,
			lng: 77.049509,
			segment: 3,
		},
		{
			name: "Medanta",
			lat: 28.440396,
			lng: 77.041375,
			segment: 3,
		},
		{
			name: "Tau Devilal Sports Complex",
			lat: 28.443924,
			lng: 77.034108,
			segment: 3,
		},
		{
			name: "Decathlon",
			lat: 28.427829,
			lng: 77.037364,
			segment: 3,
		},
		{
			name: "Block S",
			lat: 28.417311,
			lng: 77.040834,
			segment: 3,
		},
	],
	connections: [
		{
			to: "segment3",
			routeId: 3,
		},
	],
};

const route4 = {
	id: 4,
	source: {
		name: "The North Cap University",
		lat: 28.506392,
		lng: 77.051504,
		segment: 4,
	},
	destination: {
		name: "Maruti Udyog",
		lat: 28.498699,
		lng: 77.064185,
		segment: 3,
	},
	waypoints: [
		{
			name: "Sector 1",
			lat: 28.516384,
			lng: 77.045777,
			segment: 4,
		},
		{
			name: "Palam Vihar",
			lat: 28.516025,
			lng: 77.033342,
			segment: 4,
		},
		{
			name: "Presidium School",
			lat: 28.502294,
			lng: 77.029170,
			segment: 4,
		},
		{
			name: "CGHS Wellness Centre",
			lat: 28.482953,
			lng: 77.021562,
			segment: 4,
		},
		{
			name: "Country Inn & Suites",
			lat: 28.467995,
			lng: 77.037515,
			segment: 4,
		},
		{
			name: "Rajiv Nagar",
			lat: 28.482809,
			lng: 77.049786,
			segment: 4,
		},
	],
	connections: [
		{
			to: "segment3",
			routeId: 3,
		},
	],
};

let routes = [route1, route2, route3,route4];

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
