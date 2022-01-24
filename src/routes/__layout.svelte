<script context="module">
	export const load = async ({ url }) => ({
		props: {
			key: url
		}
	});
</script>

<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/env';

	import SideNav from '$lib/components/sideNav.svelte';
	import Spinner from '$lib/components/spinner.svelte';
	import Header from '$lib/components/header.svelte';
	import PageTransitions from '$lib/components/PageTransitions.svelte';
	export let key;

	let hide = true;

	onMount(() => {
		console.log($page.url.pathname);
	});

	$: $page.url.pathname === '/' ? (hide = true) : (hide = false);
</script>

<Spinner hideSpinner={browser} />

<div class="container {browser ? 'show' : ''}">
	<Header />
	<div class="columns">
		<SideNav />

		<main>
			<PageTransitions refresh={key}>
				<slot />
			</PageTransitions>
		</main>
	</div>
</div>

<style>
	.container {
		opacity: 0;
		display: flex;
		flex-direction: column;
	}
	.container.show {
		animation: fade-in 1.3s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
	}
	.columns {
		display: flex;
		flex-direction: row;
	}
	main {
		padding-inline: 2rem;
		padding-block: 1rem;
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
