<script>
	import Hero from '$lib/Hero.svelte';
	import { blur } from 'svelte/transition';
	import About from './about.svelte';

	// import Login from '$lib/accounts/Login.svelte';
</script>

<div id="hero" in:blur={{ amount: 10, duration: 1000 }}>
	<Hero />
</div>

<div>
	<About />
</div>

<!-- <Login /> -->
<style>
	#hero {
		background: url(/static/assets/symbols/Mandalorian_Skull_2.svg) no-repeat top center;
		height: 80vh;
		background-size: 600px 700px;
		margin-top: 2rem;
	}
</style>
