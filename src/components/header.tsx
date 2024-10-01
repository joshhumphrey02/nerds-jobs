'use client';
import { useRouter } from 'next/navigation';
import Logo from './icons/logo';
import { Button } from './ui/button';
import { Card } from './ui/card';

function Header() {
	const router = useRouter();
	return (
		<Card className="flex items-center py-4 px-4 sm:px-12 rounded-none justify-between border-0 border-b">
			<div className="flex items-center gap-8">
				<div className="flex items-center gap-1">
					<Logo />
					<h2>Nerds Lab</h2>
				</div>
				<ul className="hidden sm:flex gap-2 items-center">
					<li className="text-gray-600 text-sm">Job Search</li>
					<li className="text-gray-600 text-sm">Explore Companies</li>
				</ul>
			</div>
			<div className="flex gap-4">
				<Button
					onClick={() => router.replace('/?signin=user')}
					variant={'outline'}
					className=" text-base">
					Sign in
				</Button>
				<Button
					onClick={() => router.replace('/?signup=user')}
					variant={'outline'}
					className=" text-base text-purple-700">
					Sign up
				</Button>
			</div>
		</Card>
	);
}

export default Header;
