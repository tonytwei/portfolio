<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Tony Wei</title>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
	{@render children()}
</div>
