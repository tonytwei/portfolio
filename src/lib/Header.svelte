<script>
	import Logo from '$lib/Logo.svelte';

	function scrollToSection(id) {
		const el = document.getElementById(id);
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
</script>

<div class="bg-white/50 backdrop-blur-sm sticky top-0 z-10">
	<div class="mx-auto max-w-screen-sm px-6">
		<div class="flex items-center justify-between py-5">
			<button
				type="button"
				on:click={() => scrollToSection('about')}
				aria-label="Go to about"
			>
				<Logo class="h-8 w-8"/>
			</button>
			<nav class="hidden md:flex items-center gap-4 text-sm">
				<button type="button" on:click={() => scrollToSection('about')} class="hover:underline"
					>about</button
				>
				<button type="button" on:click={() => scrollToSection('work')} class="hover:underline"
					>work</button
				>
				<button type="button" on:click={() => scrollToSection('education')} class="hover:underline"
					>education</button
				>
				<button type="button" on:click={() => scrollToSection('projects')} class="hover:underline"
					>projects</button
				>
			</nav>
		</div>
	</div>
</div>
