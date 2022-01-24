<script>
	import { onMount } from 'svelte';

	let scrollY;
	let scrollUp = false;

	let scrollPos = 0;

	$: {
		scrollY > scrollPos ? (scrollUp = false) : (scrollUp = true);
		scrollPos = scrollY;
	}

	
</script>

<svelte:window bind:scrollY />

<svelte:head><title>Scroll Detection</title></svelte:head>

<section>
	<h1 class="title">Scroll detection</h1>

	<ul>
		<li>Scrolling direction: {scrollUp ? 'up' : 'down'}</li>
		<li>Pixels scrolled : {scrollY}</li>
	</ul>
</section>

<style>
	section {
		min-height: 110vh;
	}

	ul {
		position: fixed;
	}
</style>
