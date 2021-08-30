<script>
	import typewriter from '$lib/animations/typewriter';
	import { blur } from 'svelte/transition';
</script>

<div class="about" in:blur={{ amount: 10 }}>
	<h1>Some background on me</h1>

	<p in:typewriter>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam sunt qui dicta dolor? Quasi,
		laudantium natus. Officia, optio beatae iste autem commodi, modi assumenda sapiente doloremque
		ipsum cumque omnis similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
		necessitatibus, accusamus, laboriosam dolor est quisquam, a ipsam nam similique accusantium at
		tempore beatae impedit voluptate reiciendis. Officia officiis eius itaque.
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
		height: 15rem;
		margin: 2rem 7rem;
	}

	h1 {
		align-self: center;
	}
</style>
