<script>
	import typewriter from './animations/typewriter';
</script>

<div>
	<h1>Hello!</h1>

	<h3 in:typewriter>If you're looking for a programmer "this is the way"!</h3>
	<br />
	<br />
	<p>
		My name is Will, <br /> I can you help you build your future on the web. <br /> (Freelance - FT/PT))
	</p>
</div>

<style>
	* {
		justify-content: center;
		font-size: 2rem;
		text-shadow: 4px 4px black;
		display: flex;
		align-content: center;
		text-align: center;
	}

	div {
		flex-direction: column;
		height: 50vh;
	}

	h3 {
		color: rgba(221, 238, 238, 0.479);
	}
</style>
