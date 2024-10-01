import { getSiteJob } from '@/lib/get-jobs';
import { IJob } from '@/type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface JobState {
	jobs: IJob[];
	lastFetched: string | null;
	fetchJobs: () => Promise<void>;
}

const useJobStore = create<JobState>()(
	persist(
		(set) => ({
			jobs: [],
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
		}),
		{
			name: 'job-storage',
			partialize: (state) => ({
				jobs: state.jobs,
				lastFetched: state.lastFetched,
			}),
		}
	)
);

export default useJobStore;
