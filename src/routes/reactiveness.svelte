<script>
	let run;
	let running = false;

	$: {
		run ? (running = true) : (running = false);
	}
</script>

<h1 class="title">Reactiveness - Reactive Statements</h1>

<h2 class="subtitle">WIP</h2>

<p>
	<span class="highlight">Svelte</span> has a really usefull feature, the
	<a
		href="https://svelte.dev/docs#component-format-script-3-$-marks-a-statement-as-reactive"
		class="link"
		target="_blank"
		rel="nofollower noopener">Reactive Statements</a
	>: "[...] run immediately before the component updates, whenever the values that they depend on
	have changed."
</p>

<p>
	So, if anyone would want to see <span class="highlight">Mario</span> running across their screen, it
	would only take a little bit of code like this:
</p>

<img src="https://i.imgur.com/aWFKGTr.png" alt="Code Screenshot" />

<p>
	And one click here:
	<button on:click={() => (running = !running)}>{running ? 'Stop!' : 'Run!'}</button>
</p>

<img
	src="https://c.tenor.com/nnW3lB0PKC4AAAAi/mario-running-tiny.gif"
	alt="Mario GIF"
	class="mario {running ? 'running' : ''}"
/>

<style>
	.mario {
		position: absolute;
		bottom: 0;
		width: 3rem;
		opacity: 0;
	}

	.mario.running {

		animation: running 3s linear;
	}

	@keyframes running {
		0% {
			opacity: 0;
			transform: translateX(-10vw);

		}
		5% {
			opacity: 1;
		}
		100% {
			opacity: 1;
			transform: translateX(100vw);
		}
	}
</style>
