<script>
	import Logo from '$lib/Logo.svelte';
	import { browser } from '$app/environment';
	import Fa from 'svelte-fa';
	import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
	import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

	let isDark = $state(false);
	let isMenuOpen = $state(false);

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
		isMenuOpen = false; // Close menu after navigation
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<!-- Spacer for mobile to maintain height -->
<div class="md:hidden py-5 px-6">
	<div class="h-8"></div>
</div>

<div class="backdrop-blur-xs fixed md:sticky top-0 z-10 w-full">
	<div class="mx-auto max-w-screen-sm px-6">
		<div class="flex items-center justify-between py-5">
			<button
				type="button"
				onclick={() => scrollToSection('about')}
				aria-label="Go to about"
				class="cursor-pointer"
			>
				<Logo class="h-8 w-8" />
			</button>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center gap-0.5">
				<button
					type="button"
					onclick={() => scrollToSection('about')}
					class="hover:bg-black/5 hover:dark:bg-white/15 rounded-md px-2.5 py-0.5 transition-[background-color] duration-300 cursor-pointer"
					>about</button
				>
				<button
					type="button"
					onclick={() => scrollToSection('experience')}
					class="hover:bg-black/5 hover:dark:bg-white/15 rounded-md px-2.5 py-0.5 transition-[background-color] duration-300 cursor-pointer"
					>experience</button
				>
				<button
					type="button"
					onclick={() => scrollToSection('projects')}
					class="hover:bg-black/5 hover:dark:bg-white/15 rounded-md px-2.5 py-0.5 transition-[background-color] duration-300 cursor-pointer"
					>projects</button
				>
				<button
					type="button"
					onclick={toggleDarkMode}
					class="flex items-center justify-center h-7 w-[34px] px-2 py-0.5 hover:bg-black/5 hover:dark:bg-white/15 rounded-md transition-[background-color] duration-300 cursor-pointer"
					aria-label="Toggle dark mode"
				>
					<Fa
						icon={faSun}
						size="sm"
						color="#18181b"
						translateX="0.05"
						translateY="0.05"
						class="block dark:hidden"
					/>
					<Fa
						icon={faMoon}
						size="sm"
						color="#fafafa"
						translateX="0.1"
						translateY="0.05"
						class="hidden dark:block"
					/>
				</button>
			</nav>

			<!-- Mobile Burger Menu Button -->
			<button
				type="button"
				onclick={toggleMenu}
				class="md:hidden flex items-center justify-center p-2.5 hover:bg-black/5 hover:dark:bg-white/15 rounded-md transition-[background-color] duration-300"
				aria-label="Toggle menu"
				aria-expanded={isMenuOpen}
			>
				{#if isMenuOpen}
					<Fa icon={faXmark} size="sm" color="#18181b" class="block dark:hidden" />
					<Fa icon={faXmark} size="sm" color="#fafafa" class="hidden dark:block" />
				{:else}
					<Fa icon={faBars} size="sm" color="#18181b" class="block dark:hidden" />
					<Fa icon={faBars} size="sm" color="#fafafa" class="hidden dark:block" />
				{/if}
			</button>
		</div>

		<!-- Mobile Navigation Menu -->
		{#if isMenuOpen}
			<nav class="md:hidden flex flex-col gap-2 pb-4">
				<button
					type="button"
					onclick={() => scrollToSection('about')}
					class="text-left hover:bg-black/5 hover:dark:bg-white/15 rounded-md px-3 py-2 transition-[background-color] duration-300 cursor-pointer"
					>about</button
				>
				<button
					type="button"
					onclick={() => scrollToSection('experience')}
					class="text-left hover:bg-black/5 hover:dark:bg-white/15 rounded-md px-3 py-2 transition-[background-color] duration-300 cursor-pointer"
					>experience</button
				>
				<button
					type="button"
					onclick={() => scrollToSection('projects')}
					class="text-left hover:bg-black/5 hover:dark:bg-white/15 rounded-md px-3 py-2 transition-[background-color] duration-300 cursor-pointer"
					>projects</button
				>
				<button
					type="button"
					onclick={toggleDarkMode}
					class="flex items-center gap-2 hover:bg-black/5 hover:dark:bg-white/15 rounded-md px-3 py-2 transition-[background-color] duration-300 cursor-pointer"
					aria-label="Toggle dark mode"
				>
					<Fa
						icon={faSun}
						size="sm"
						color="#18181b"
						translateX="0.05"
						translateY="0.05"
						class="block dark:hidden"
					/>
					<Fa
						icon={faMoon}
						size="sm"
						color="#fafafa"
						translateX="0.1"
						translateY="0.05"
						class="hidden dark:block"
					/>
					<span class="hidden dark:inline">dark mode</span>
					<span class="inline dark:hidden">light mode</span>
				</button>
			</nav>
		{/if}
	</div>
</div>
