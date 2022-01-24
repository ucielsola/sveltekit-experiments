<script>
	import { onMount } from 'svelte';

	let scrollY;
	let scrollUp = false;
	const showNav = () => {
		setTimeout(() => {
			console.log('stop');
			return true;
		}, 800);
	};
	let scrollPos = 0;

	$: if (scrollY > scrollPos) {
		console.log('start');
		let oldScroll = 0;
		scrollUp = oldScroll < scrollY;
		showNav();
	}
</script>

<svelte:window bind:scrollY />

<svelte:head><title>Scroll Detection</title></svelte:head>

<section>
    <h1 class="title">Scroll detection</h1>
</section>