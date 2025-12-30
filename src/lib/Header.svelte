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

<div class="backdrop-blur-xs sticky top-0 z-10">
	<div class="mx-auto max-w-screen-sm px-6">
		<div class="flex items-center justify-between py-5">
			<button type="button" onclick={() => scrollToSection('about')} aria-label="Go to about" class="cursor-pointer">
				<Logo class="h-8 w-8" />
			</button>
			<nav class="hidden md:flex items-center gap-0.5">
				<button
					type="button"
					onclick={() => scrollToSection('about')}
					class="hover:bg-black/5 hover:dark:bg-white/15 rounded-md px-2 py-0.5 transition-[background-color] duration-300 cursor-pointer"
					>about</button
				>
				<button
					type="button"
					onclick={() => scrollToSection('experience')}
					class="hover:bg-black/5 hover:dark:bg-white/15 rounded-md px-2 py-0.5 transition-[background-color] duration-300 cursor-pointer"
					>experience</button
				>
				<button
					type="button"
					onclick={() => scrollToSection('projects')}
					class="hover:bg-black/5 hover:dark:bg-white/15 rounded-md px-2 py-0.5 transition-[background-color] duration-300 cursor-pointer"
					>projects</button
				>
				<button
					type="button"
					onclick={toggleDarkMode}
					class="h-7 pt-px hover:bg-black/5 hover:dark:bg-white/15 rounded-md px-2 py-0.5 transition-[background-color] duration-300 cursor-pointer"
					aria-label="Toggle dark mode"
				>
					<Fa icon={faSun} size="sm" color="#18181b" class="block dark:hidden" />
					<Fa icon={faMoon} size="sm" color="#fafafa" class="hidden dark:block" />
				</button>
			</nav>
		</div>
	</div>
</div>
