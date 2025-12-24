<script>
	import favicon from '$lib/assets/favicon.svg';

	function scrollToSection(id) {
		const el = document.getElementById(id);
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
</script>

<div class="bg-white/50 backdrop-blur-sm sticky top-0 z-10">
	<div class="mx-auto max-w-screen-sm px-6">
		<div class="flex items-center justify-between py-4">
			<button
				type="button"
				onclick={() => scrollToSection('about')}
				class="inline-flex items-center gap-2"
			>
				<img src={favicon} alt="Logo" class="h-6 w-6" />
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
			</nav>
			<button class="md:hidden p-2" aria-label="Open menu">☰</button>
		</div>
	</div>
</div>
