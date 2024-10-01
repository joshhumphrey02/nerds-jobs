'use client';
import useJobStore from '@/stores/useJobStore';
import { Card } from '../ui/card';
import CompanyLogo from '../companyLogo';
import Tag from '../tag';
import { useEffect } from 'react';
import { IJob } from '@/type';
import { FormWrapper } from '../form-wrapper';
import { cn, formatDateDistance } from '@/lib/utils';
import { Share2, TagIcon } from 'lucide-react';

interface Props {
	className?: string;
	open: boolean;
	jobId?: string;
}

function SelectedJob({ open, jobId }: Props) {
	const { job, fetchJob } = useJobStore();

	useEffect(() => {
		fetchJob(parseInt(jobId ?? '0'));
	}, [jobId]);

	return (
		<>
			<div className="hidden sm:block">
				{job ? (
					<Job {...job} className="px-6 py-4" />
				) : (
					<h3 className="text-lg font-semibold text-center mt-14">
						Job not Found
					</h3>
				)}
			</div>
			{job && (
				<FormWrapper
					className=" overflow-y-scroll"
					open={open}
					formKey="jobId"
					formValue={jobId ?? '0'}>
					<Job
						{...job}
						className="max-h-[80dvh] sm:hidden overflow-y-scroll border-0 shadow-none rounded-none pt-2 pb-6"
					/>
				</FormWrapper>
			)}
		</>
	);
}

export default SelectedJob;

interface JobProps extends IJob {
	className?: string;
}

function Job(props: JobProps) {
	const {
		companyLogo,
		companyName,
		title,
		locations,
		jobType,
		experienceLevel,
		workModel,
		description,
		className,
		createdAt,
	} = props;
	return (
		<Card className={cn(className)}>
			<div className="w-full flex flex-col gap-6">
				<div className="flex justify-between items-center">
					<div className="flex gap-2 items-center">
						<CompanyLogo logo={companyLogo} />
						<span className=" text-base font-medium">{companyName}</span>
					</div>
					<div className="flex gap-2">
						<span className="p-2 rounded bg-card border-border flex border">
							<TagIcon />
						</span>
						<span className="p-2 rounded bg-card border-border flex border">
							<Share2 />
						</span>
					</div>
				</div>
				<div className="gap-2 flex flex-col ">
					<h1 className="sm:text-xl text-base  font-bold">{title}</h1>
					<div className="flex gap-2">
						<span className=" text-sm font-medium text-gray-500">
							{locations}
						</span>
						<span className="text-sm font-medium text-gray-500">
							{formatDateDistance(new Date(createdAt).toDateString())}
						</span>
					</div>
				</div>
			</div>
			<div className="flex items-center gap-2">
				<Tag text={locations} />
				<Tag text={jobType ?? ''} />
				<Tag text={workModel ?? ''} />
				<Tag text={experienceLevel ?? ''} />
			</div>
			<h3 className="font-bold text-lg leading-8 mb-3 mt-4">About  the Job</h3>
			<div
				dangerouslySetInnerHTML={{
					__html: description,
				}}
				className="space-y-4"></div>
		</Card>
	);
}
