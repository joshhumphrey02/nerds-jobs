export interface IJob {
	title: string;
	description: string;
	companyName: string;
	companyLogo: string;
	pubDate: string;
	url: string;
	locations: string;
	minSalary?: string;
	maxSalary?: string;
	workModel?: string;
	jobType?: string;
	experienceLevel?: string;
	tags?: string[];
	createdAt: Date;
}

export interface IFilters {
	title: string;
	locations: string[];
}

export interface IUserDetails {
	email: string;
	password?: string;
	userName?: string;
	logged?: 'logged' | 'notLogged' | 'checking';
}
