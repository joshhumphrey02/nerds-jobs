import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDateDistance(date: string) {
	const seconds = Math.floor(
		(new Date().getTime() - new Date(date).getTime()) / 1000
	);
	let interval = Math.floor(seconds / 31536000);
	if (interval > 1) {
		return `${interval}y ago`;
	}

	interval = Math.floor(seconds / 86400);
	if (interval > 1) {
		return `${interval}d ago`;
	}
	interval = Math.floor(seconds / 3600);
	if (interval > 1) {
		return `${interval}h ago`;
	}
	interval = Math.floor(seconds / 60);
	if (interval > 1) {
		return `${interval}m ago`;
	}
	return `${Math.floor(seconds)}s ago`;
}

export const shouldFetchJobs = (lastFetched: string | null): boolean => {
	if (!lastFetched) return true;

	const lastFetchDate = new Date(lastFetched);
	const currentDate = new Date();
	return (
		lastFetchDate.getDate() !== currentDate.getDate() ||
		lastFetchDate.getMonth() !== currentDate.getMonth()
	);
};
