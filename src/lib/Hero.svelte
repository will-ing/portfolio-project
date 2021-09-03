<script>
	import typewriter from './animations/typewriter';
</script>

<div>
	<div>
		<h1>Hello!</h1>

		<h3 in:typewriter>If you're looking for a programmer "this is the way"!</h3>
	</div>
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
		margin: auto;
	}

	div div {
		border: 2px solid;
		background-color: rgba(22, 22, 22, 0.678);
		width: 31rem;
		height: 10rem;
		box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 50%);
	}

	p {
		border: 2px solid;
		background-color: rgba(22, 22, 22, 0.678);
		width: 31rem;
		height: 10rem;
		margin: auto;
		box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 50%);
	}
	h3 {
		color: rgba(221, 238, 238, 0.479);
	}
</style>
