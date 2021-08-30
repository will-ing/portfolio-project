<script>
	import Header from '$lib/Header.svelte';

	import SocialNav from '$lib/SocialNav.svelte';
</script>

<Header />
<slot />
<div>
	<SocialNav />
</div>

<style>
	div {
		width: 40px;
		position: fixed;
		bottom: 0px;
		left: 40px;
		right: auto;
		z-index: 10;
		/* background-color: rgb(51, 51, 51); */
	}
</style>
