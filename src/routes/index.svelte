<section>
	<h1 class="title">
		Hi! This is my place to test and break stuff with <a class="link" href="https://kit.svelte.dev"
			>SvelteKit</a
		>
	</h1>

	<div class="link-wrapper">
		<a id="to-portfolio" class="highlight" href="https://ucielsola.com">- Visit my portfolio -</a>
	</div>

	<iframe
		title="Gif"
		src="https://giphy.com/embed/M9TraSZZ6csmhxyxRo"
		width="480"
		height="270"
		frameBorder="0"
		class="giphy-embed"
		allowFullScreen
	/>
</section>

<style>
	.link-wrapper {
		text-align: center;
		font-size: 1.5rem;
		margin-inline: auto;
		padding-block: 3rem;
	}

	section {
		display: grid;
		place-content: center;
	}
	iframe {
		margin-inline: auto;
		pointer-events: none;
	}
</style>
