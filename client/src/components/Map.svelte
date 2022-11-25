<script>
	// console.log(window);

	import { onMount } from "svelte";
	import gurgaon from "../data.js";
	import axios from "axios";
	console.log(gurgaon);
	// Instantiate the map using the vecor map with the
	// default style as the base layer:
	let mapper;
	onMount(async function () {
		const resp = await axios.get("http://34.125.168.157:5000/routes");
		console.log(resp, "resp");

		let source = resp.data[1].source;
		let destination = resp.data[1].destination;
		let waypointsTransit = [];
		resp.data[1].waypoints.forEach((waypoint) => {
			waypointsTransit.push(waypoint);
		});

		const H = window.H;
		console.log(window);
		const platform = new H.service.Platform({
			apikey: "BSNlq_zRKvN-myRqnT6hPdGSPl5kjCBMPw2Y615ZgLk",
		});
		resp.data.forEach((route) => {
			let s2 = route.source;
			let d2 = route.destination;
			let waypointsRouting = [];
			route.waypoints.forEach((waypoint) => {
				waypointsRouting.push(`${waypoint.lat},${waypoint.lng}`);
			});
			addRouteRouting(platform, waypointsRouting, H, onResult, s2, d2);
		});
		const defaultLayers = platform.createDefaultLayers();
		// console.log(defaultLayers);
		// console.log(window.H);
		const map = new H.Map(mapper, defaultLayers.raster.normal.transit, {
			zoom: 12,
			center: { lat: 28.4595, lng: 77.0266 },
			pixelRatio: window.devicePixelRatio || 1,
		});

		const mapEvents = new H.mapevents.MapEvents(map);
		let ui = H.ui.UI.createDefault(map, defaultLayers);

		// Add event listener:
		map.addEventListener("tap", function (evt) {
			// Log 'tap' and 'mouse' events:
			console.log(evt.target);
		});
		var behavior = new H.mapevents.Behavior(mapEvents);
		var circle = new H.map.Circle({ lat: 28.4684, lng: 77.0521 }, 11000);

		// Add the circle to the map:
		map.addObject(circle);
		// var ui = H.ui.UI.createDefault(map, defaultLayers);
		// test(map);
		// let waypoints = [
		// 	`${gurgaon[3].lat},${gurgaon[3].lng}`,
		// 	`${gurgaon[4].lat},${gurgaon[4].lng}`,
		// ];
		// let waypoints1 = [`${gurgaon[0].lat},${gurgaon[0].lng}`];

		let trafficService = platform.getTrafficService(),
			provider = new H.service.traffic.flow.Provider(trafficService);
		// addRouteTransit(
		// 	platform,
		// 	waypointsTransit,
		// 	H,
		// 	onResult,
		// 	source,
		// 	waypointsTransit[0]
		// );
		// addRouteTransit(
		// 	platform,
		// 	waypointsTransit,
		// 	H,
		// 	onResult,
		// 	waypointsTransit[0],
		// 	waypointsTransit[1]
		// );
		// addRouteTransit(
		// 	platform,
		// 	waypointsTransit,
		// 	H,
		// 	onResult,
		// 	waypointsTransit[1],
		// 	waypointsTransit[2]
		// );
		// addRouteTransit(
		// 	platform,
		// 	waypointsTransit,
		// 	H,
		// 	onResult,
		// 	waypointsTransit[2],
		// 	waypointsTransit[3]
		// );
		// addRouteTransit(
		// 	platform,
		// 	waypointsTransit,
		// 	H,
		// 	onResult,
		// 	waypointsTransit[3],
		// 	waypointsTransit[4]
		// );
		// addRouteTransit(
		// 	platform,
		// 	waypointsTransit,
		// 	H,
		// 	onResult,
		// 	waypointsTransit[4],
		// 	waypointsTransit[5]
		// );
		// addRouteTransit(
		// 	platform,
		// 	waypointsTransit,
		// 	H,
		// 	onResult,
		// 	waypointsTransit[5],
		// 	destination
		// );
		// addRoute(platform, waypoints, H, onResult, source, destination);
		// addRoute(platform, waypoints1, H, onResult,source,destination);
		function onResult(result) {
			// console.log("hello");
			console.log(result, "result");
			// ensure that at least one route was found
			if (result.routes.length) {
				result.routes[0].sections.forEach((section) => {
					// Create a linestring to use as a point source for the route line
					let linestring = H.geo.LineString.fromFlexiblePolyline(
						section.polyline
					);
					let routeOutline;
					if (result.notices) {
						routeOutline = new H.map.Polyline(linestring, {
							style: {
								lineWidth: 5,
								strokeColor: "rgba(0, 128, 255, 0.7)",
								lineTailCap: "arrow-tail",
								lineHeadCap: "arrow-head",
							},
						});
					} else {
						routeOutline = new H.map.Polyline(linestring, {
							style: {
								lineWidth: 5,
								strokeColor: "rgba(245, 24, 24, 0.7)",
								lineTailCap: "arrow-tail",
								lineHeadCap: "arrow-head",
							},
						});
					}
					// Create a patterned polyline:
					let routeArrows = new H.map.Polyline(linestring, {
						style: {
							lineWidth: 10,
							fillColor: "white",
							strokeColor: "rgba(255, 255, 255, 1)",
							lineDash: [0, 2],
							lineTailCap: "arrow-tail",
							lineHeadCap: "arrow-head",
						},
					});

					// Create a polyline to display the route:
					let routeLine = new H.map.Group();
					routeLine.addObjects([routeOutline, routeArrows]);

					// Create a marker for the start point:
					let startMarker = new H.map.Marker(section.departure.place.location);
					// let bubble = new H.ui.InfoBubble(
					// 	{
					// 		lng: section.departure.place.location.lng,
					// 		lat: section.departure.place.location.lat,
					// 	},
					// 	{
					// 		content: "<b>hellu</b>",
					// 	}
					// );

					// // Add info bubble to the UI:
					// ui.addBubble(bubble);
					// Create a marker for the end point:
					let endMarker = new H.map.Marker(section.arrival.place.location);

					// Add the route polyline and the two markers to the map:
					map.addObjects([routeLine, startMarker, endMarker]);

					// Set the map's viewport to make the whole route visible:
					map.getViewModel();
					// .setLookAtData({ bounds: routeLine.getBoundingBox() });
				});
			}
		}
	});

	async function addRouteTransit(
		platform,
		waypoints,
		H,
		onResult,
		source,
		destination
	) {
		const url =
			"https://transit.router.hereapi.com/v8/routes?origin=41.79457,12.25473&destination=41.90096,12.50243&return=polyline&apikey=6odJUv7kDQPaYtH2picifXqt27HJJ073KvFZHaEnrdY";

		let routeParameters = {
			origin: `${source.lat},${source.lng}`,
			destination: `${destination.lat},${destination.lng}`,
			return: "polyline",
		};
		let publicTransitService = platform.getPublicTransitService();
		publicTransitService.getRoutes(routeParameters, onResult, function (error) {
			alert(error.message);
		});
	}

	async function addRouteRouting(
		platform,
		waypoints,
		H,
		onResult,
		source,
		destination
	) {
		var routingParameters = {
			routingMode: "fast",
			transportMode: "bus",
			// The start point of the route:
			origin: `${source.lat},${source.lng}`,
			destination: `${destination.lat},${destination.lng}`,
			// via: [
			// 	`${gurgaon[3].lat},${gurgaon[3].lng}`,
			// 	`${gurgaon[4].lat},${gurgaon[4].lng}`,
			// ],
			via: new H.service.Url.MultiValueQueryParameter(waypoints),
			// Include the route shape in the response
			return: "polyline",
		};
		var router = platform.getRoutingService(null, 8);
		router.calculateRoute(routingParameters, onResult, function (error) {
			alert(error.message);
		});
	}

	// 	async function test(map) {
	// 		var style = `
	// sources:
	//     omv:
	//         type: OMV
	// # global description of the map, in this example
	// # the map background color is white
	// scene:
	//     background:
	//         color: [1.000, 1.000, 1.000, 1.00]

	// # section contains the style information for the layers
	// # that are present on the map
	// layers:
	//     # user defined name of the rendering layer
	//     water_areas:
	//         # the section defines where the rendering layer takes
	//         # its data from source: omv is mandatory for the Vector Tile API
	//         # layer: water specifies what vector layer is taken
	//         # for the rendering see REST API documentation for the
	//         # list of available layers.
	//         data: {source: omv, layer: water}
	//         # section defines how to render the layer
	//         draw:
	//             polygons:
	//                 order: 1 # z-order of the layer
	//                 color: [0.055, 0.604, 0.914, 1.00]
	//     road:
	//         data: {source: omv, layer: roads}
	//         draw:
	//             lines:
	//                 order: 2
	//                 color: [0.561, 0.561, 0.561, 1.00]
	//                 width: 15

	// `;

	// 		var style2 = `
	// sources:
	//   omv:
	//     type: OMV
	// layers:
	//   roads:
	//     data: {source: omv, layer: roads}
	//     draw:
	//       lines:
	//         order: 2
	//         width: 2px
	//         color: [0.561, 0.561, 0.561, 1.00]
	// `;

	// 		// var baseLayer = map.getBaseLayer();
	// 		// baseLayer.getProvider().setStyle(new H.map.Style(style2));
	// 	}
</script>

<div class="test" bind:this={mapper} />

<style>
	.test {
		width: 100vw;
		height: 100vh;
		border-radius: 10rem;
	}
</style>
