'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { SelectWithSearch } from './selectwithsearch';
import { IFilters } from '@/type';
import { RotateCcw, Search } from 'lucide-react';

// import { useJobStore } from "@/providers/jobsStoreProvider";

export default function FilterSection() {
	// const { jobs, filterBySearch } = useJobStore((state) => state);
	const [searchOptions, setSearchOptions] = useState<IFilters>({
		title: '',
		locations: [],
	});
	const [locations, setLoactions] = useState<string[]>([]);

	// Handle Form submit
	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	// Handle Form Reset
	const handleReset = () => {
		setSearchOptions({
			title: '',
			locations: [],
		});
	};
	const jobs: any = [];
	return (
		<form
			onReset={handleReset}
			onSubmit={handleSubmit}
			className="w-full px-4 sm:px-12">
			<div className=" rounded-xl  shadow-md border w-full flex-col sm:flex-row flex gap-4 justify-between py-3 px-3 sm:px-6">
				<div className="flex-1 flex gap-2 sm:border-r border-border items-center justify-start">
					<Search />
					<Input
						type="text"
						value={searchOptions.title}
						onChange={(e) =>
							setSearchOptions({ ...searchOptions, title: e.target.value })
						}
						placeholder="Search a keyword"
						className=" font-normal text-sm border-0 focus-visible:ring-0 focus-visible:ring-offset-transparent"
					/>
				</div>
				<div className="flex-1 flex flex-col sm:flex-row gap-4 items-center justify-between">
					<div className="flex-1 w-full pr-4">
						<SelectWithSearch
							data={[]}
							heading="locations"
							setSearchOptions={setSearchOptions}
							searchOptions={searchOptions}
						/>
					</div>
					<div className="flex items-center gap-4">
						<Button
							type="submit"
							variant={'default'}
							className=" text-sm font-bold bg-blue-500 text-white hover:bg-blue-600">
							Search
						</Button>
						<Button
							type="reset"
							className=" flex items-center gap-1 text-sm font-bold">
							<RotateCcw className="w-4 h-4" />
							Reset
						</Button>
					</div>
				</div>
			</div>
		</form>
	);
}
