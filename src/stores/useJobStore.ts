import { getSiteJob } from '@/lib/get-jobs';
import { IJob } from '@/type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface JobState {
	jobs: IJob[];
	job: IJob | null;
	lastFetched: string | null;
	fetchJobs: () => Promise<void>;
	fetchJob: (id?: number) => void;
}

const useJobStore = create<JobState>()(
	persist(
		(set, get) => ({
			jobs: [],
			job: null,
			lastFetched: null,
			fetchJobs: async () => {
				try {
					const jobs: IJob[] = await getSiteJob();
					set({
						jobs,
						lastFetched: new Date().toISOString(),
					});
				} catch (error) {
					console.error('Error fetching jobs: ', error);
				}
			},
			fetchJob: (id) => {
				const { jobs } = get();
				const job = jobs.find((_, i) => i === id) ?? jobs[0];
				set({
					job,
					jobs,
				});
			},
		}),
		{
			name: 'job-storage',
			partialize: (state) => ({
				jobs: state.jobs,
				job: state.job,
				lastFetched: state.lastFetched,
			}),
		}
	)
);

export default useJobStore;
