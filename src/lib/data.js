import placeholderImage from '$lib/assets/favicon.svg';
import commonwealthbankLogo from '$lib/assets/logos/commonwealthbank.jpeg';
import fytoLogo from '$lib/assets/logos/fyto.jpeg';
import gdscLogo from '$lib/assets/logos/gdsc.jpeg';
import juniorEngineersLogo from '$lib/assets/logos/junior_engineers.jpeg';
import unimelbLogo from '$lib/assets/logos/unimelb.jpeg';
import unilodgeLogo from '$lib/assets/logos/unilodge.jpeg';
import australianRedCrossLogo from '$lib/assets/logos/australian_red_cross.jpeg';
import mentalHealthFirstAidLogo from '$lib/assets/logos/mental_health_first_aid.jpeg';
import vicGovLogo from '$lib/assets/logos/vic_gov.png';
import algorithmsLearningPlatform from '$lib/assets/projects/algorithms_learning_platform.png';
import budgetTransactionSync from '$lib/assets/projects/budget_transaction_sync.png';
import environmentMonitor from '$lib/assets/projects/environment_monitor.png';
import tetrisInJava from '$lib/assets/projects/tetris.png';

export const experiences = [
	{
		company: 'Commonwealth Bank',
		image: commonwealthbankLogo,
		positions: [
			{
				title: 'Technology Graduate',
				startDate: 'Feb 2025',
				endDate: 'Present',
				highlights: [
					'Built full-stack applications from concept to deployment using React, Node.js, and AWS services, enhancing customer experience and operational efficiency.',
					'Collaborated in Agile teams to deliver high-quality software solutions, participating in sprint planning, daily stand-ups, and retrospectives.',
					'Implemented CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment times by 30% and improving code quality through automated testing.',
				]
			}
		]
	},
	{
		company: 'Google Developer Student Club - University of Melbourne',
		image: gdscLogo,
		positions: [
			{
				title: 'Tech & Education Director',
				startDate: 'Oct 2024',
				endDate: 'Sep 2024',
				highlights: [
					'Built full-stack applications from concept to deployment using React, Node.js, and AWS services, enhancing customer experience and operational efficiency.',
					'Collaborated in Agile teams to deliver high-quality software solutions, participating in sprint planning, daily stand-ups, and retrospectives.',
					'Implemented CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment times by 30% and improving code quality through automated testing.',
				]
			},
			{
				title: 'Tech & Education Lead',
				startDate: 'Aug 2024',
				endDate: 'Oct 2024',
				highlights: [
					'Built full-stack applications from concept to deployment using React, Node.js, and AWS services, enhancing customer experience and operational efficiency.',
					'Collaborated in Agile teams to deliver high-quality software solutions, participating in sprint planning, daily stand-ups, and retrospectives.',
					'Implemented CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment times by 30% and improving code quality through automated testing.',
				]
			}
		]
	},
	{
		company: 'Fyto Technologies',
		image: fytoLogo,
		positions: [
			{
				title: 'Software Engineer Intern',
				startDate: 'Mar 2024',
				endDate: 'May 2024',
				highlights: [
					'Built full-stack applications from concept to deployment using React, Node.js, and AWS services, enhancing customer experience and operational efficiency.',
					'Collaborated in Agile teams to deliver high-quality software solutions, participating in sprint planning, daily stand-ups, and retrospectives.',
					'Implemented CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment times by 30% and improving code quality through automated testing.',
				]
			}
		]
	},
	{
		company: 'Commonwealth Bank',
		image: commonwealthbankLogo,
		positions: [
			{
				title: 'Technology Summer Intern',
				startDate: 'Nov 2023',
				endDate: 'Feb 2024',
				highlights: [
					'Built full-stack applications from concept to deployment using React, Node.js, and AWS services, enhancing customer experience and operational efficiency.',
					'Collaborated in Agile teams to deliver high-quality software solutions, participating in sprint planning, daily stand-ups, and retrospectives.',
					'Implemented CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment times by 30% and improving code quality through automated testing.',
				]
			}
		]
	},
	{
		company: 'Junior Engineers',
		image: juniorEngineersLogo,
		positions: [
			{
				title: 'Instructor',
				startDate: 'Feb 2023',
				endDate: 'Nov 2023',
				highlights: [
					'Taught group lessons and provided instruction to help under 14s learn programming fundamentals',
					'Collaborated with other instructors to develop engaging curriculum with Python, Scratch, Arduino',
				]
			}
		]
	},
	{
		company: 'Unilodge Student Accommodation',
		image: unilodgeLogo,
		positions: [
			{
				title: 'Residential Advisor',
				startDate: 'Feb 2023',
				endDate: 'Nov 2023',
				highlights: [
					'Adapt and resolve emergency and welfare incidents that arise on shift in a professional manner',
					'Practice conflict resolution and assist management team in resolving disputes between residents',
				]
			}
		]
	}
];

export const education = [
	{
		degree: 'Bachelor of Science, Computing and Software Systems',
		institution: 'University of Melbourne',
		image: unimelbLogo,
		year: '2024'
	},
	{
		degree: 'High School Diploma, Computer Science, Mathematics, Physics',
		institution: 'ACG Parnell College',
		image: placeholderImage,
		year: '2021'
	}
];

export const certifications = [
	{
		name: 'First Aid and CPR',
		image: australianRedCrossLogo,
		institution: 'Australian Red Cross',
		expiry: 'Feb 2026'
	},
	{
		name: 'Standard Mental Health First Aider',
		image: mentalHealthFirstAidLogo,
		institution: 'Mental Health First Aid Australia',
		expiry: 'Apr 2026'
	},
	{
		name: 'Working With Children Check',
		image: vicGovLogo,
		institution: 'Victoria State Government',
		expiry: 'Jan 2028'
	}
];

export const projects = [
	{
		name: 'Budget Transaction Sync',
		shortDescription: 'Automated transaction syncing between Up Bank and Actual Budget using AWS Lambda and Webhooks.',
		description:
			'Automatically syncs Up Bank transactions to Actual Budget using AWS Lambda webhooks. Each transaction triggers a Lambda function that retrieves and adds transaction details to Actual Budget for budgeting across web and mobile.',
		technologies: ['AWS Lambda', 'Node.js', 'Webhooks', 'REST API'],
		images: [budgetTransactionSync],
		githubUrl: 'https://github.com/tonytwei/upbank-actualbudget-sync'
	},
	{
		name: 'Portfolio Website',
		shortDescription: 'Modern portfolio website featuring responsive design.',
		description:
			'A simple and elegant website built using SvelteKit and Tailwind CSS. It showcases my projects and experience with a focus on performance and user experience, featuring responsive design and smooth animations.',
		technologies: ['SvelteKit', 'Tailwind CSS', 'Vite', 'JavaScript'],
		images: [placeholderImage],
		githubUrl: 'https://github.com/tonytwei/portfolio'
	},
	{
		name: 'Algorithms Learning Platform',
		shortDescription: 'Interactive learning platform used to teach data structures and algorithms.',
		description:
			'A multichoice learning platform used for teaching workshops. Features OAuth authentication for user management and serves as an educational resource for learning algorithms and data structures.',
		technologies: ['Next.js', 'React', 'NextAuth', 'MongoDB','TypeScript'],
		images: [algorithmsLearningPlatform],
		githubUrl: 'https://github.com/tonytwei/algoquiz'
	},
	{
		name: 'Environment Monitor',
		shortDescription: 'Environmental monitoring dashboard with Raspberry Pi sensor.',
		description:
			'Full-stack environmental monitoring platform collecting real-time sensor data from a Raspberry Pi attachment. Tracks temperature, pressure, humidity, and particulate matter with database storage and graphical visualisations.',
		technologies: ['SvelteKit', 'Flask', 'MySQL', 'Docker', 'JavaScript', 'Python'],
		images: [environmentMonitor],
		githubUrl: 'https://github.com/tonytwei/environment-monitor'
	},
	{
		name: 'Tetris in Java',
		shortDescription: 'Classic Tetris game built using a graphics engine.',
		description:
			'Tetris recreation in Java using a lightweight graphics engine. Implements Super Rotation System (SRS) for authentic piece rotation and wall kicks.',
		technologies: ['Java'],
		images: [tetrisInJava],
		githubUrl: 'https://github.com/tonytwei/java-tetris'
	}
];
