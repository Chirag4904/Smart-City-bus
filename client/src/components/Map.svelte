<script>
	// console.log(window);
	import RouteAPI from "./RouteAPI.svelte";
	import { onMount } from "svelte";
	import gurgaon from "../data.js";
	console.log(gurgaon);
	// Instantiate the map using the vecor map with the
	// default style as the base layer:
	let mapper;
	onMount(() => {
		const H = window.H;
		console.log(window);
		const platform = new H.service.Platform({
			apikey: "6odJUv7kDQPaYtH2picifXqt27HJJ073KvFZHaEnrdY",
		});

		const defaultLayers = platform.createDefaultLayers();
		console.log(defaultLayers);
		// console.log(window.H);
		const map = new H.Map(mapper, defaultLayers.raster.normal.transit, {
			zoom: 13,
			center: { lat: 28.4595, lng: 77.0266 },
			pixelRatio: window.devicePixelRatio || 1,
		});

		const mapEvents = new H.mapevents.MapEvents(map);

		// Add event listener:
		map.addEventListener("tap", function (evt) {
			// Log 'tap' and 'mouse' events:
			console.log(evt.type, evt.currentPointer.type);
		});
		var behavior = new H.mapevents.Behavior(mapEvents);
		var circle = new H.map.Circle({ lat: 28.4684, lng: 77.0521 }, 8000);

		// Add the circle to the map:
		map.addObject(circle);
		// var ui = H.ui.UI.createDefault(map, defaultLayers);
		// test(map);
		let waypoints = [
			`${gurgaon[3].lat},${gurgaon[3].lng}`,
			`${gurgaon[4].lat},${gurgaon[4].lng}`,
		];
		let waypoints1 = [`${gurgaon[0].lat},${gurgaon[0].lng}`];

		addRoute(platform, waypoints, H, onResult);
		addRoute(platform, waypoints1, H, onResult);
		function onResult(result) {
			console.log("hello");
			console.log(result);
			// ensure that at least one route was found
			if (result.routes.length) {
				result.routes[0].sections.forEach((section) => {
					// Create a linestring to use as a point source for the route line
					let linestring = H.geo.LineString.fromFlexiblePolyline(
						section.polyline
					);

					// Create a polyline to display the route:
					let routeLine = new H.map.Polyline(linestring, {
						style: { strokeColor: "blue", lineWidth: 3 },
					});

					// Create a marker for the start point:
					let startMarker = new H.map.Marker(section.departure.place.location);

					// Create a marker for the end point:
					let endMarker = new H.map.Marker(section.arrival.place.location);

					// Add the route polyline and the two markers to the map:
					map.addObjects([routeLine, startMarker, endMarker]);

					// Set the map's viewport to make the whole route visible:
					map
						.getViewModel()
						.setLookAtData({ bounds: routeLine.getBoundingBox() });
				});
			}
		}
	});

	function addRoute(platform, waypoints, H, onResult) {
		var routingParameters = {
			routingMode: "fast",
			transportMode: "bus",
			// The start point of the route:
			origin: "28.4647,77.0845",
			// The end point of the route:
			destination: "28.4738,77.0107",
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

<div bind:this={mapper} />
<RouteAPI />

<style>
	div {
		width: 100vw;
		height: 100vh;
		border-radius: 999px;
	}
</style>
