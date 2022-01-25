<script>
	let scrollY;
	let scrollPos = 0;
	let scrollUp = false;
	let stoppedScrolling = true;

	const debounce = (callback, wait) => {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				callback(...args);
			}, wait);
		};
	};

	const debounceScroll = debounce(() => {
		stoppedScrolling = true;
	}, 300);

	$: {
		scrollY > scrollPos ? (scrollUp = false) : (scrollUp = true);
		scrollPos = scrollY;
		stoppedScrolling = false;
		debounceScroll();
	}
</script>

<svelte:window bind:scrollY />

<svelte:head><title>Scroll Detection</title></svelte:head>

<section>
	<article>
		<h1 class="title">Scroll detection</h1>

		<p>
			As you can see in the floating box at the bottom, this page will detect <span
				class="highlight">scrolling direction</span
			>, <span class="highlight">distance scrolled</span> from top (in px), and if you
			<span class="highlight">stopped scrolling</span>.
		</p>

		<h3>
			So, <span class="highlight">how does it works</span>?
		</h3>

		<p>
			The <span class="highlight">scrolled distance</span> is determined by the
			<span class="highlight">window.scrollY</span>
			property, which will return the scrolled distance (in pixels) from the top of the page. <br />
			Also, I've asigned the value of this prop. to a variable, and then created a
			<span class="highlight">reactive block</span>
			of code, using the <span class="highlight">$:</span> reactive declarations syntax. Any code
			inside this block will be triggered/updated if any of the variables inside were changed.
			<br />

			So every time you scroll, <span class="highlight">window.scrollY</span> updates and, as you can
			see in the attached screenshot, I'll compare its value with scrollPos (initilized as zero). If
			it's bigger, then you are scrolling down, otherwise you are scrolling up (because after each check,
			scrollY's value will be asigned to scrollPos).
		</p>
		<div class="img-wrapper">
			<img src="https://i.imgur.com/c4JaJDc.png" alt="Code screenshot" />
		</div>
		<p>
			Also, I'm asigning "false" (boolean value) to <span class="highlight">stoppedScrolling</span>
			(because if that code block is triggered, it's because you are scrolling), and then invoking
			<span class="highlight">debounceScroll()</span>, a function (screenshot attached) that will
			set <span class="highlight">stoppedScrolling</span> to true after 300ms if you didn't scroll again
			in that time (debounced).
		</p>

		<div class="img-wrapper">
			<img src="https://i.imgur.com/Y03vUHA.png" alt="Code screenshot" />
		</div>
	</article>

	<div class="wrapper">
		<div class="floating">
			Distance from top: {scrollY}px <br />
			Scrolling direction: {scrollUp ? 'up' : 'down'} <br />
			Scroll stopped: {stoppedScrolling} <br />
		</div>
	</div>
</section>

<style>
	section {
		padding-bottom: 10rem;
	}

	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.floating {
		position: fixed;
		bottom:1rem;
		border: 3px solid var(--border);
		padding: 1rem;
		border-radius: 15px;
		box-shadow: 0 0.5rem 3rem -0.7rem var(--border);
		background-color: var(--background-transparency);
	}

	h3 {
		padding-top: 2rem;
	}
	.img-wrapper {
		max-width: 700px;
		margin-inline: auto;
		margin-block: 2rem;
	}
	img {
		max-width: 100%;
		border-radius: 10px;
	}
</style>
