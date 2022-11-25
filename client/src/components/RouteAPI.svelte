<script>
	import axios from "axios";
	import { onMount } from "svelte";
	import gurgaon from "../data";

	onMount(async function () {
		await httpGetRoute();
	});

	async function httpGetRoute() {
		const routeUrl = `https://router.hereapi.com/v8/routes?origin=${gurgaon[1].lat},${gurgaon[1].lng}&destination=${gurgaon[2].lat},${gurgaon[2].lng}&return=summary,typicalDuration&transportMode=car&apikey=6odJUv7kDQPaYtH2picifXqt27HJJ073KvFZHaEnrdY`;
		const response = await axios.get(routeUrl);
		const data = response.data.routes[0].sections[0].summary;
		console.log(data);
	}
</script>
