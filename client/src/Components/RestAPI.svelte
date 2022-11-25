<script>
	import axios from "axios";
	import { onMount } from "svelte";

	onMount(async function () {
		await httpGetRoute();
	});

	async function httpGetRoute() {
		const resp = await axios.get("http://localhost:5000/routes");
		const routes = resp.data;
		console.log(routes);
		// for (let i = 0; i < routes.length; i++) {
		let routePoints = [];
		routePoints.push(routes[0].source);
		routePoints.push(routes[0].destination);
		routes[0].waypoints.forEach((waypoint) => {
			routePoints.push(waypoint);
		});
		// console.log(routePoints);
		for (let i = 0; i < routePoints.length - 1; i++) {
			const url = `https://transit.router.hereapi.com/v8/routes?origin=${
				routePoints[i].lat
			},${routePoints[i].lng}&destination=${routePoints[i + 1].lat},${
				routePoints[i + 1].lng
			}&return=polyline&apikey=BSNlq_zRKvN-myRqnT6hPdGSPl5kjCBMPw2Y615ZgLk`;

			const resp = await axios.get(url);
			console.log(resp);
		}
		// }
		//
		// const response = await axios.get(routeUrl);
		// const data = response.data.routes[0].sections[0].summary;
		// console.log(response, "data");
	}
</script>
