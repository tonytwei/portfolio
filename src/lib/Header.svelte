<script>
	import Logo from '$lib/Logo.svelte';
	import { browser } from '$app/environment';
	import Fa from 'svelte-fa';
	import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

	let isDark = $state(false);

	$effect(() => {
		if (browser) {
			// Initialize from localStorage or system preference
			const stored = localStorage.getItem('darkMode');
			if (stored !== null) {
				isDark = stored === 'true';
			} else {
				isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			}

			// Apply the dark class
			if (isDark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	});

	function toggleDarkMode() {
		isDark = !isDark;
		if (browser) {
			localStorage.setItem('darkMode', String(isDark));
			if (isDark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}

	function scrollToSection(id) {
		const el = document.getElementById(id);
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
</script>

<div class="backdrop-blur-sm sticky top-0 z-10">
	<div class="mx-auto max-w-screen-sm px-6">
		<div class="flex items-center justify-between py-5">
			<button type="button" onclick={() => scrollToSection('about')} aria-label="Go to about">
				<Logo class="h-8 w-8" />
			</button>
			<nav class="hidden md:flex items-center gap-4 text-sm">
				<button type="button" onclick={() => scrollToSection('about')} class="hover:underline"
					>about</button
				>
				<button type="button" onclick={() => scrollToSection('work')} class="hover:underline"
					>work</button
				>
				<button type="button" onclick={() => scrollToSection('education')} class="hover:underline"
					>education</button
				>
				<button type="button" onclick={() => scrollToSection('projects')} class="hover:underline"
					>projects</button
				>
				<button
					type="button"
					onclick={toggleDarkMode}
					class="h-5 pt-px"
					aria-label="Toggle dark mode"
				>
					{#if isDark}
						<Fa icon={faMoon} class="h-8" />
					{:else}
						<Fa icon={faSun} class="h-8" />
					{/if}
				</button>
			</nav>
		</div>
	</div>
</div>
