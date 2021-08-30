<script>
	let email = '';
	let password = '';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const submit = () =>
		dispatch('register', {
			email: email,
			password: password
		});
</script>

<h3>Register</h3>
<form id="register-form" method="POST" action="/api/account">
	<input type="email" bind:value={email} name="email" placeholder="email" />
	<input type="password" bind:value={password} name="password" placeholder="password" />
	<button on:click|preventDefault={submit} type="submit">Go!</button>
</form>
