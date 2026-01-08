<script>
	let { images = [] } = $props();

	let currentIndex = $state(0);

	function nextSlide() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function previousSlide() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function goToSlide(index) {
		currentIndex = index;
	}
</script>

<div
	class="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-200/80 dark:border-gray-700/80 bg-gray-50 dark:bg-gray-900"
>
	<!-- Images -->
	<div class="relative w-full h-full">
		{#each images as image, index}
			<div
				class="absolute inset-0 transition-opacity duration-500"
				class:opacity-0={currentIndex !== index}
				class:opacity-100={currentIndex === index}
			>
				<img
					src={image}
					alt="Project screenshot {index + 1}"
					class="w-full h-full object-contain"
				/>
			</div>
		{/each}
	</div>

	<!-- Navigation Arrows -->
	{#if images.length > 1}
		<button
			onclick={previousSlide}
			class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 dark:bg-white/20 hover:bg-black/70 dark:hover:bg-white/30 text-white flex items-center justify-center transition-colors"
			aria-label="Previous image"
		>
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"
				></path>
			</svg>
		</button>

		<button
			onclick={nextSlide}
			class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 dark:bg-white/20 hover:bg-black/70 dark:hover:bg-white/30 text-white flex items-center justify-center transition-colors"
			aria-label="Next image"
		>
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
				></path>
			</svg>
		</button>

		<!-- Dots Navigation -->
		<div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
			{#each images as _, index}
				<button
					onclick={() => goToSlide(index)}
					class="w-2 h-2 rounded-full transition-all {currentIndex === index
						? 'bg-white'
						: 'bg-white/40'}"
					aria-label="Go to image {index + 1}"
				></button>
			{/each}
		</div>
	{/if}
</div>
