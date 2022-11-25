<script>
	import { Router, Route, Link, navigate } from "svelte-routing";
	import Login from "./Components/Login.svelte";
	import Map from "./components/Map.svelte";
	import Schedule from "./Components/Schedule.svelte";
	import Wallet from "./Components/Wallet.svelte";
	import Welcome from "./Components/Welcome.svelte";
	import SignUp from "./Components/SignUp.svelte";
	import RestAPI from "./components/RestAPI.svelte";
</script>

<Router>
	<body>
		<Route path="/">
			<Welcome />
		</Route>
		<Route path="/map">
			<Map />
		</Route>
		<Route path="/schedule">
			<Schedule />
		</Route>
		<Route path="/login">
			<Login />
		</Route>
		<Route path="/signup">
			<SignUp />
		</Route>
		<Route path="/wallet">
			<Wallet />
		</Route>
	</body>
</Router>
