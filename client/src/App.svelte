<script>
  // console.log(window);
  // import { onMount } from "svelte";

  // // Instantiate the map using the vecor map with the
  // // default style as the base layer:
  // onMount(() => {
  // 	var platform = new window.H.service.Platform({
  // 		apikey: "6odJUv7kDQPaYtH2picifXqt27HJJ073KvFZHaEnrdY",
  // 	});

  // 	var defaultLayers = platform.createDefaultLayers();
  // 	console.log(window.H);
  // 	var map = new window.H.Map(
  // 		document.getElementById("mapContainer"),
  // 		defaultLayers.vector.normal.map
  // 	);
  // });
  import Welcome from "./Components/Welcome.svelte";
  import SignUp from "./Components/SignUp.svelte";
  import Login from "./Components/Login.svelte";
  import Schedule from "./Components/Schedule.svelte";
</script>

<div>
  <Schedule />
</div>
