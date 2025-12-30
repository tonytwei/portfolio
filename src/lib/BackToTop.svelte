<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Fa from 'svelte-fa';
	import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

	let isScrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 0;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

{#if isScrolled}
	<div class="fixed bottom-8 left-0 right-0 pointer-events-none z-9">
		<div class="mx-auto max-w-screen-sm px-6 flex justify-end">
			<button
				transition:fade={{ duration: 300 }}
				onclick={scrollToTop}
				class="pointer-events-auto
					flex
					items-center
					gap-2.5
					px-3
					py-1.5
					rounded-md
					border
					border-zinc-900/50
					dark:border-zinc-50/50
					backdrop-blur-xs
					bg-zinc-50/50
					dark:bg-zinc-900/50
					hover:bg-zinc-200/50
					hover:dark:bg-zinc-700/50
					hover:transition-[background-color]
					hover:duration-300
					cursor-pointer"
				aria-label="Back to top"
			>
				<Fa icon={faAnglesUp} size="sm" color="#18181b" class="block dark:hidden" />
				<Fa icon={faAnglesUp} size="sm" color="#fafafa" class="hidden dark:block" />
				<span class="text-sm">Back to top</span>
			</button>
		</div>
	</div>
{/if}
