import Footer from '@/components/footer';
import Header from '@/components/header';
import AvailableJobs from '@/components/home/available-jobs';
import FilterSection from '@/components/home/filterSection';
import SelectedJob from '@/components/home/selected-job';
import Signin from '@/components/home/signin';
import Signup from '@/components/home/signup';

interface Props {
	searchParams: {
		signin?: string;
		signup?: string;
		jobId?: string;
	};
}

export default function Home({ searchParams }: Props) {
	return (
		<div className="font-[family-name:var(--font-geist-sans)] max-w-screen-2xl">
			<div className="space-y-8">
				<Header />
				<FilterSection />
				<div className="px-4 sm:px-12 grid sm:grid-cols-2 gap-6">
					<AvailableJobs />
					<SelectedJob open={!!searchParams.jobId} />
				</div>
				<Footer />
			</div>
			<Signin open={!!searchParams?.signin} />
			<Signup open={!!searchParams?.signup} />
		</div>
	);
}

// <p>
// 	Nerds Lab is a platform that connects remote professionals with
// 	companies looking for remote talent. We help you find the best
// 	opportunities and help you build your professional network.
// </p>;
