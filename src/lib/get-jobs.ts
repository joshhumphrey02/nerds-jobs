'use server';
import { type IJob } from '@/type';

export const getSiteJob = async () => {
	try {
		const res = await fetch('https://tryremotely.com/api/v1');
		const results = await res.json();
		const jobs: IJob[] = results?.jobs.map((job: any) => {
			const filtered = {
				title: job.title,
				description: job.description,
				companyName: job.companyName,
				companyLogo: job.companyLogo,
				pubDate: job.pubDate,
				url: job.applicationLink,
				locations: job.locations[0],
				tags: job.tags,
				workModel: job.workModel,
				jobType: job.jobType,
				experienceLevel: job.seniorityLevel,
				minSalary: job.minSalary,
				maxSalary: job.maxSalary,
			};
			return filtered;
		});
		return jobs;
	} catch (error) {
		console.log((error as Error).message);
		return [];
	}
};
