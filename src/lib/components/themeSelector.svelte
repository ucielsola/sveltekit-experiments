<script>
import theme from "$lib/stores/theme";
let selectedTheme = $theme
</script>

<div class="container">
	<h4>Theme</h4>
		<select name="theme" id="theme" bind:value="{selectedTheme}" on:change={theme.set(selectedTheme)}>
            <option value="dracula-theme">Dracula theme</option>
			<option value="grayscale-theme">Grayscale theme</option>
			<option value="pastel-theme">Pastel theme</option>
			<option value="ebony-theme">Ebony theme</option>
			<option value="creamy-theme">Creamy theme</option>
		</select>
</div>

<style>
	.container {
		display: grid;
		place-content: center;
	}

	h4 {
		color: var(--body);
		margin: 0;
		padding-block: 0.5rem;
	}

    
</style>
