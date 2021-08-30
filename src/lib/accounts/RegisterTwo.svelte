<script>
	import Register from '$lib/accounts/Register.svelte';

	async function handleMessage(event) {
		const email = event.detail.email;
		const password = event.detail.password;

		try {
			const submit = await fetch('/api/account', {
				method: 'POST',
				body: JSON.stringify({
					email,
					password
				}),
				headers: { 'content-type': 'application/json' }
			});
		} catch (e) {
			console.error(e);
		}
		// alert(event.detail.data);
	}
</script>

<Register on:register={handleMessage} />
