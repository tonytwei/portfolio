<script>
	import Header from '$lib/Header.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import ImageCarousel from '$lib/ImageCarousel.svelte';
	import { experiences, education, certifications, projects } from '$lib/data.js';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

	const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
	let showExperienceDetails = $state(!isMobile);
	let showProjectDetails = $state(!isMobile);

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
			<p class="animate">
				A passionate developer focused on creating elegant solutions to complex problems.
				Experienced in full-stack development, UI/UX design, and building user-centric applications.
			</p>
			<p class="animate">
				Driven by curiosity and a love for learning new technologies. Always exploring innovative
				approaches to software development and design.
			</p>
			<p class="animate">
				Welcome to my portfolio where I showcase my work, projects, and share insights about
				technology and software engineering.
			</p>
		</section>
		<section id="experience" class="scroll-mt-20 pt-13 flex flex-col gap-6">
			<!-- Work Experience -->
			<div class="flex flex-col gap-3">
				<div
					class="animate flex items-center justify-between cursor-pointer hover:bg-black/5 hover:dark:bg-white/15 rounded-md px-4 py-3.5 transition-[background-color] duration-300"
					onclick={() => (showExperienceDetails = !showExperienceDetails)}
					role="button"
					tabindex="0"
					onkeydown={(e) => e.key === 'Enter' && (showExperienceDetails = !showExperienceDetails)}
				>
					<h2 class="font-semibold text-lg">Experience</h2>
					<div class="flex items-center justify-center h-7" aria-label="Toggle experience details">
						{#if showExperienceDetails}
							<Fa
								icon={faAngleDown}
								translateX="-0.05"
								size="sm"
								color="#18181b"
								class="block dark:hidden"
							/>
							<Fa
								icon={faAngleDown}
								translateX="-0.05"
								size="sm"
								color="#fafafa"
								class="hidden dark:block"
							/>
						{:else}
							<Fa
								icon={faAngleUp}
								translateX="-0.05"
								size="sm"
								color="#18181b"
								class="block dark:hidden"
							/>
							<Fa
								icon={faAngleUp}
								translateX="-0.05"
								size="sm"
								color="#fafafa"
								class="hidden dark:block"
							/>
						{/if}
					</div>
				</div>
				{#each experiences as exp (exp.company + exp.positions[0].startDate)}
					<div class="animate flex gap-3 pl-1">
						{#if exp.positions.length > 1}
							<!-- Multiple positions: Show && showExperienceDetails company first -->
							{#if exp.image}
								<img
									src={exp.image}
									alt={exp.company}
									class="w-8 h-8 object-contain rounded mt-1 bg-white p-1"
								/>
							{/if}
							<div class="flex-1 flex flex-col">
								<div>
									<div class="font-semibold">{exp.company}</div>
									<div class="flex flex-col gap-3 mt-1.5">
										{#each exp.positions as position (position.title + position.startDate)}
											<div class="pl-4 border-l-2 border-gray-200/80">
												<div class="text-[15px] font-semibold">{position.title}</div>
												<div class="text-xs opacity-80 pl-px">
													{position.startDate} - {position.endDate}
												</div>
												{#if position.highlights && showExperienceDetails}
													<ul class="mt-1 space-y-px list-disc list-inside">
														{#each position.highlights as highlight (highlight)}
															<li class="text-sm font-light opacity-80">
																{highlight}
															</li>
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
									class="w-8 h-8 object-contain rounded mt-1 bg-white p-1"
								/>
							{/if}
							<div class="flex-1 flex flex-col">
								<div>
									<div class="font-semibold">{exp.positions[0].title}</div>
									<div class="text-sm opacity-80 pl-px">{exp.company}</div>
									<div class="text-xs opacity-80 pl-px">
										{exp.positions[0].startDate} - {exp.positions[0].endDate}
									</div>
									{#if exp.positions[0].highlights && showExperienceDetails}
										<ul class="mt-1 space-y-px list-disc list-inside">
											{#each exp.positions[0].highlights as highlight (highlight)}
												<li class="text-sm font-light opacity-80">
													{highlight}
												</li>
											{/each}
										</ul>
									{/if}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>

			{#if showExperienceDetails}
				<!-- Education -->
				<div class="flex flex-col gap-3">
					<h3 class="font-semibold">Education</h3>
					{#each education as edu (edu.degree + edu.year)}
						<div class="flex gap-3 pl-1">
							{#if edu.image}
								<img
									src={edu.image}
									alt={edu.institution}
									class="w-8 h-8 object-contain rounded mt-1 bg-white p-1"
								/>
							{/if}
							<div class="flex-1">
								<div class="text-sm font-medium">{edu.degree}</div>
								<div class="text-sm opacity-80">{edu.institution}</div>
								<div class="text-xs opacity-80">{edu.year}</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- Certifications -->
				<div class="flex flex-col gap-3">
					<h3 class="font-semibold">Certifications</h3>
					<div class="flex flex-col gap-3 pl-1">
						{#each certifications as cert (cert.name)}
							<div class="flex gap-3">
								{#if cert.image}
									<img
										src={cert.image}
										alt={cert.name}
										class="w-8 h-8 object-contain rounded mt-1 bg-white p-1"
									/>
								{/if}
								<div class="flex-1">
									<div class="text-sm font-medium">{cert.name}</div>
									<div class="text-sm opacity-80">{cert.institution}</div>
									<div class="text-xs opacity-80">Expires: {cert.expiry}</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</section>
		<section id="projects" class="scroll-mt-20 pt-13 flex flex-col gap-6">
			<div
				class="animate flex items-center justify-between cursor-pointer hover:bg-black/5 hover:dark:bg-white/15 rounded-md px-4 py-3.5 transition-[background-color] duration-300"
				onclick={() => (showProjectDetails = !showProjectDetails)}
				role="button"
				tabindex="0"
				onkeydown={(e) => e.key === 'Enter' && (showProjectDetails = !showProjectDetails)}
			>
				<h2 class="font-semibold text-lg">Projects</h2>
				<div class="flex items-center justify-center h-7" aria-label="Toggle project details">
					{#if showProjectDetails}
						<Fa
							icon={faAngleDown}
							translateX="-0.05"
							size="sm"
							color="#18181b"
							class="block dark:hidden"
						/>
						<Fa
							icon={faAngleDown}
							translateX="-0.05"
							size="sm"
							color="#fafafa"
							class="hidden dark:block"
						/>
					{:else}
						<Fa
							icon={faAngleUp}
							translateX="-0.05"
							size="sm"
							color="#18181b"
							class="block dark:hidden"
						/>
						<Fa
							icon={faAngleUp}
							translateX="-0.05"
							size="sm"
							color="#fafafa"
							class="hidden dark:block"
						/>
					{/if}
				</div>
			</div>
			<div class="flex flex-col gap-6">
				{#each projects as project (project.name)}
					<div class="animate flex flex-col gap-2 pl-1">
						<div class="flex gap-3">
							<div class="flex-1 flex flex-col gap-2">
								<h3 class="font-semibold text-[15px]">{project.name}</h3>
								<p class="text-sm opacity-80 font-light leading-relaxed">
									{showProjectDetails ? project.description : project.shortDescription}
								</p>
								{#if project.githubUrl && showProjectDetails}
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="text-sm opacity-80 hover:opacity-100 transition-opacity underline decoration-dotted underline-offset-2"
									>
										View on GitHub →
									</a>
								{/if}
							</div>
							{#if project.images && project.images.length > 0 && showProjectDetails}
								<div class="hidden md:flex shrink-0 w-64">
									<ImageCarousel images={project.images} />
								</div>
							{/if}
						</div>
						{#if project.technologies && project.technologies.length > 0}
							<div class="flex flex-wrap gap-2 mt-1">
								{#each project.technologies as tech}
									<span class="text-xs px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 opacity-80">
										{tech}
									</span>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>
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
