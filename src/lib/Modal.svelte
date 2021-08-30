<script>
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = (e) => {
		if (e.key === 'Escape') {
			close();
			return;
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="modal-background" on:click={close} />

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<slot />

	<!-- svelte-ignore a11y-autofocus -->
	<button autofocus on:click={close}>close</button>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
	}

	.modal {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-items: center;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 20rem;
		max-height: 15rem;
		height: 11rem;
		overflow: auto;
		transform: translate(-50%, -50%);
		padding: 1em;
		border-radius: 0.2em;
		background: rgba(123, 149, 124, 0.9);
		color: whitesmoke;
	}

	button {
		display: flex;
		align-self: center;
		justify-content: center;
		align-items: center;
		width: 5rem;
		height: 2rem;
	}
</style>
