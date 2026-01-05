<script>
	import Header from '$lib/Header.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import { experiences, education, certifications } from '$lib/data.js';
	import { onMount } from 'svelte';

	// Staggered animation for elements with the "animate" class
	const STAGGER = 100; // milliseconds between items
	onMount(() => {
		const nodes = Array.from(document.querySelectorAll('.animate'));
		if (!nodes.length) return;

		nodes.forEach((el, i) => {
			setTimeout(() => el.classList.add('in'), i * STAGGER);
		});
	});
</script>

<Header />

<div class="mx-auto max-w-screen-sm px-6">
	<BackToTop />
	<div class="space-y-11">
		<section id="about" class="scroll-mt-20 pt-13 flex flex-col gap-4">
			<div class="animate font-semibold text-lg">
				<h1>Tony Wei</h1>
				<h1>Software Engineer</h1>
			</div>
			<p class="animate pl-px">
				A passionate developer focused on creating elegant solutions to complex problems.
				Experienced in full-stack development, UI/UX design, and building user-centric applications.
			</p>
			<p class="animate pl-px">
				Driven by curiosity and a love for learning new technologies. Always exploring innovative
				approaches to software development and design.
			</p>
			<p class="animate pl-px">
				Welcome to my portfolio where I showcase my work, projects, and share insights about
				technology and software engineering.
			</p>
		</section>
		<section id="experience" class="scroll-mt-20 pt-13 flex flex-col gap-6">
			<!-- Work Experience -->
			<div class="flex flex-col gap-3">
				<h2 class="animate font-semibold text-lg">Experience</h2>
				{#each experiences as exp (exp.company + exp.positions[0].startDate)}
					<div class="animate flex gap-3 pl-1">
						{#if exp.positions.length > 1}
							<!-- Multiple positions: Show company first -->
							{#if exp.image}
								<img src={exp.image} alt={exp.company} class="w-8 h-8 object-contain rounded mt-0.5" />
							{/if}
							<div class="flex-1 flex flex-col">
								<div>
									<div class="font-semibold">{exp.company}</div>
									<div class="flex flex-col gap-3 mt-1">
										{#each exp.positions as position (position.title + position.startDate)}
											<div class="pl-4 border-l-2 border-gray-200">
												<div class="text-[15px] font-semibold">{position.title}</div>
												<div class="text-xs text-gray-600 pl-px">
													{position.startDate} - {position.endDate}
												</div>
												{#if position.highlights}
													<ul class="mt-1 space-y-px list-disc list-inside">
														{#each position.highlights as highlight (highlight)}
															<li class="text-sm font-light text-gray-700">{highlight}</li>
														{/each}
													</ul>
												{/if}
											</div>
										{/each}
									</div>
								</div>
							</div>
						{:else}
							<!-- Single position: Show position first -->
							{#if exp.image}
								<img
									src={exp.image}
									alt={exp.company}
									class="w-8 h-8 object-contain rounded mt-1"
								/>
							{/if}
							<div class="flex-1 flex flex-col">
								<div>
									<div class="font-semibold">{exp.positions[0].title}</div>
									<div class="text-sm text-gray-600 pl-px">{exp.company}</div>
									<div class="text-xs text-gray-600 pl-px">
										{exp.positions[0].startDate} - {exp.positions[0].endDate}
									</div>
									{#if exp.positions[0].highlights}
										<ul class="mt-1 space-y-px list-disc list-inside">
											{#each exp.positions[0].highlights as highlight (highlight)}
												<li class="text-sm font-light text-gray-700">{highlight}</li>
											{/each}
										</ul>
									{/if}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Education -->
			<div class="flex flex-col gap-3">
				<h3 class="animate font-semibold">Education</h3>
				{#each education as edu (edu.degree + edu.year)}
					<div class="animate flex gap-3 pl-1">
						{#if edu.image}
							<img
								src={edu.image}
								alt={edu.institution}
								class="w-8 h-8 object-contain rounded mt-1"
							/>
						{/if}
						<div class="flex-1">
							<div class="text-sm font-medium text-gray-900">{edu.degree}</div>
							<div class="text-sm text-gray-600">{edu.institution}</div>
							<div class="text-xs text-gray-500">{edu.year}</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Certifications -->
			<div class="flex flex-col gap-3">
				<h3 class="animate font-semibold">Certifications</h3>
				<div class="animate flex flex-col gap-3 pl-1">
					{#each certifications as cert (cert.name)}
						<div class="flex gap-3">
							{#if cert.image}
								<img src={cert.image} alt={cert.name} class="w-8 h-8 object-contain rounded mt-1" />
							{/if}
							<div class="flex-1">
								<div class="text-sm font-medium text-gray-900">{cert.name}</div>
								<div class="text-sm text-gray-600">{cert.institution}</div>
								<div class="text-xs text-gray-500">Expires: {cert.expiry}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
		<section id="projects" class="scroll-mt-20 pt-13">
			<h2 class="animate">projects section</h2>
			<p class="animate">
				Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
				pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
				aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
				Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
				aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
				ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
				pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
				aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
				Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
				aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
				ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
				pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
				aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
				Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
				aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
				ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
				pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
				aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
				Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
				aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
				ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
				pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
				aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
				Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
				aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
				ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
				pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
				aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
				Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
				aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
				ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
				pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
				aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
				Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
				aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
				ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
				pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
				aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
				Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
				aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
				ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
				pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
				aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
				Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
				aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
				ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
				pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
				aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
				Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
				aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
				ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
				pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
				aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
				Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
				aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
			</p>
		</section>
	</div>
</div>

<style>
	.animate {
		opacity: 0;
		transform: translateY(12px);
		transition:
			opacity 420ms cubic-bezier(0.2, 0.9, 0.2, 1),
			transform 420ms cubic-bezier(0.2, 0.9, 0.2, 1);
		will-change: opacity, transform;
	}

	:global(.animate.in) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
