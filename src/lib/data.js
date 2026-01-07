import placeholderImage from '$lib/assets/favicon.svg';
import commonwealthbankLogo from '$lib/assets/commonwealthbank_logo.jpeg';
import fytoLogo from '$lib/assets/fyto_logo.jpeg';
import gdscLogo from '$lib/assets/gdsc_logo.jpeg';
import juniorEngineersLogo from '$lib/assets/junior_engineers_logo.jpeg';
import unimelbLogo from '$lib/assets/unimelb_logo.jpeg';
import unilodgeLogo from '$lib/assets/unilodge_logo.jpeg';
import australianRedCrossLogo from '$lib/assets/australian_red_cross_logo.jpeg';
import mentalHealthFirstAidLogo from '$lib/assets/mental_health_first_aid_logo.jpeg';
import vicGovLogo from '$lib/assets/vic_gov_logo.png';

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
