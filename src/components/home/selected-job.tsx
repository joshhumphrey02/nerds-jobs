'use client';
import useJobStore from '@/stores/useJobStore';
import { Card } from '../ui/card';
import CompanyLogo from '../companyLogo';
import Tag from '../tag';
import JobApplicationCard from './jobApplicationCard';
import { IJob } from '@/type';

function SelectedJob() {
	const { jobs } = useJobStore();
	const job: IJob = jobs[0];
	return (
		<div className="hidden sm:block">
			<Card className="px-6 py-4">
				<div className="xl:w-jobDescriptionSection">
					<div className="w-full flex items-start gap-6 mb-5">
						<CompanyLogo logo={job?.companyLogo} />
						<div className="gap-2 flex flex-col ">
							<h1 className="md:text-xl text-lg  font-semibold">
								{job?.title}
							</h1>
							<span className="text-primary-dark text-base font-medium">
								{job?.companyName}
							</span>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<Tag text={job?.locations} />
						<Tag text={job?.jobType ?? ''} />
						<Tag text={job?.workModel ?? ''} />
						<Tag text={job?.experienceLevel ?? ''} />
					</div>
					<h3 className="text-black font-bold text-base leading-8 mb-3 mt-8">
						About  {job?.companyName}
					</h3>
					<div
						dangerouslySetInnerHTML={{
							__html: job?.description,
						}}></div>
				</div>
			</Card>
		</div>
	);
}

export default SelectedJob;
