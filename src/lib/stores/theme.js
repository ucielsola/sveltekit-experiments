import { browser } from '$app/env';
import { writable } from 'svelte/store';

export const defaultTheme = 'dracula-theme';
const recoverTheme = browser ? window.localStorage.getItem('theme') ?? defaultTheme : defaultTheme;

export const theme = writable(recoverTheme);

theme.subscribe((theme_name) => {
	if (!browser) return;
	// saves theme to localStorage
	window.localStorage.setItem('theme', theme_name);
	
	// modifies HTML class to apply theme
	const html = document.querySelector('html');
	html.classList.replace(html.classList[0], theme_name);
});

export { theme as default };
