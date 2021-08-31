<script>
	import Modal from './Modal.svelte';
	import { blur } from 'svelte/transition';

	let showModal = false;
	let name;
	let email;
	let message;
	let passed;

	const submitForm = async () => {
		try {
			const submit = await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify({
					name,
					email,
					message
				})
			});
			const data = await submit.json();

			// console.log(data.result);

			if (data.result === 'Message Sent') {
				showModal = true;
				passed = data.result;
				name = '';
				message = '';
				email = '';
			}
		} catch (error) {
			showModal = true;
			passed = data.result;
		}
	};
</script>

<div class="contact">
	<section in:blur={{ amount: 10 }}>
		<h1>Contact Information</h1>

		<address>
			<a href="mailto:willkoger@gmail.com?subject=new client inquiry">willkoger@gmail.com</a>
		</address>

		<form on:submit|preventDefault={submitForm} role="form" class="contactForm">
			<label for="name">Name</label>
			<input required type="name" id="name" name="name" bind:value={name} />
			<br />

			<label for="email">Email</label>
			<input required type="email" id="email" name="email" bind:value={email} />
			<br />

			<label for="text">Message</label>
			<br />
			<textarea rows="5" cols="35" name="message" bind:value={message} />
			<br />

			<button type="submit">Send Message</button>
		</form>
	</section>
</div>

{#if showModal}
	<Modal on:close={() => (showModal = false)}>
		<h2>{passed}</h2>
		{#if passed === 'Message Sent'}
			<p>We will reach out within 2 buisness days</p>
		{/if}
	</Modal>
{/if}

<style>
	.contact {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 0.2rem;
		height: 40rem;
		width: 100%;
		max-width: 1520px;
		margin: auto;
	}

	section {
		width: 30rem;
		height: 20em;
		margin-bottom: 7rem;
		padding: 2rem;
		background-color: rgba(177, 177, 177, 0.101);
		box-shadow: 3px 3px 3px 1px rgb(0 0 0 / 30%);
	}

	form textarea:nth-of-type(1) {
		margin: 0px;
		width: 30rem;
		height: 12rem;
	}

	section h1 {
		font-weight: 700;
	}

	@media (max-width: 1000px) {
		.contact {
			display: flex;
			flex-direction: row;
			margin-top: 0.5rem;
			height: 40rem;
			width: 100%;
		}

		section {
			width: 86vw;
			height: 36rem;
			background-color: rgba(185, 185, 185, 0.678);
			display: flex;
			position: absolute;
			justify-content: center;
			flex-direction: column;
			flex-wrap: wrap;
		}
	}
</style>
