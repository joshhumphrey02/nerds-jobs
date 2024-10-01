'use client';
import { Dot } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { formatDateDistance, shouldFetchJobs } from '@/lib/utils';
import { useEffect } from 'react';
import useJobStore from '@/stores/useJobStore';
import Tag from '../tag';
import CompanyLogo from '../companyLogo';

function AvailableJobs() {
	const { jobs, lastFetched, fetchJobs } = useJobStore();

	useEffect(() => {
		if (shouldFetchJobs(lastFetched)) {
			fetchJobs();
		}
	}, [lastFetched, fetchJobs]);
	return (
		<div className="space-y-6">
			<div className="space-y-2">
				<h2>Explore and apply to remote jobs world wide</h2>
				<Badge
					variant={'outline'}
					className="bg-blue-50 rounded-3xl text-blue-600">
					<Dot /> {jobs.length} results
				</Badge>
			</div>
			<div className="space-y-2">
				{jobs &&
					jobs.splice(0, 10).map((job, i) => (
						<Card
							key={job.title + i}
							className="flex gap-4 items-start px-6 py-4">
							<CompanyLogo logo={job.companyLogo} />
							<div className="space-y-2">
								<div className="flex flex-col gap-1">
									<h2 className="text-sm font-medium">{job.title}</h2>
									<span className="text-sm font-medium text-gray-600">
										{job.companyName}
									</span>
									<span className="text-xs font-medium text-gray-600">
										{job.locations}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Tag text={job.locations} />
									<Tag text={job?.jobType ? job.jobType : ''} />
									<Tag text={job?.workModel ? job.workModel : ''} />
									<Tag text={job?.experienceLevel ? job.experienceLevel : ''} />
								</div>
								<div>
									<span className="text-xs font-normal text-gray-500">
										{job.createdAt &&
											formatDateDistance(
												new Date(job.createdAt).toDateString()
											)}
									</span>
								</div>
							</div>
						</Card>
					))}
			</div>
		</div>
	);
}

export default AvailableJobs;

const jobs = [
	{
		id: 1,
		title: 'Senior Frontend Developer',
		company: 'XYZ Corp',
		location: 'New York, NY',
		salary: '$100k - $150k',
	},
	{
		id: 2,
		title: 'Senior Backend Developer',
		company: 'ABC Corp',
		location: 'Los Angeles, CA',
		salary: '$120k - $180k',
	},
	{
		id: 3,
		title: 'Junior Frontend Developer',
		company: 'DEF Corp',
		location: 'Chicago, IL',
		salary: '$80k - $120k',
	},
	{
		id: 4,
		title: 'Senior Frontend Developer',
		company: 'XYZ Corp',
		location: 'New York, NY',
		salary: '$100k - $150k',
	},
];
