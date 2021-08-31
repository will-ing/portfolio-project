<script>
	import typewriter from '$lib/animations/typewriter';
	import { blur } from 'svelte/transition';
</script>

<div class="about" in:blur={{ amount: 10 }}>
	<h1>Some background on me</h1>

	<p>
		Before I was deploying code, I was deploying to Iraq and Aftganistan as a
		infantryman/paratrooper in the Army. I served between 2008 to 2014. Upon leaving the military I
		pursued many adventures across the USA. During that 6 month hiatus I worked on a ranch, operated
		heavy equipment on construction sites and backpacked in Yosemite. When I felt it was time to
		start a career I got in supply chain distribution. Starting at REI and now working for evo as a
		support engineer on the Data Team. In my spare time I like to help others achieve there buisness
		goals by building software that fits there needs.
	</p>
</div>

<style>
	* {
		display: flex;
	}
	.about {
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		border: 2px solid;
		background-color: rgba(39, 39, 39, 0.678);
		width: 41rem;
		height: 18rem;
		margin: 3rem auto;
		box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 50%);
	}

	h1 {
		align-self: center;
	}
</style>
