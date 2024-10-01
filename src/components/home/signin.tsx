'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormWrapper } from '../form-wrapper';
import Link from 'next/link';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthLoginInput, AuthLoginSchema } from '@/lib/validators/auth';
import { useFormState } from 'react-dom';
import { LoaderIcon } from 'lucide-react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	open: boolean;
}

function Signin({ open, className, ...props }: Props) {
	const form = useForm<AuthLoginInput>({
		resolver: zodResolver(AuthLoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const [loading, setLoading] = React.useState(false);
	// const [state, dispatch] = useFormState(login, undefined);
	async function handleSubmit(data: AuthLoginInput) {
		setLoading(true);
		// dispatch(data);
	}
	// React.useEffect(() => {
	// 	if (state?.formError) {
	// 		toast({
	// 			title: 'Error',
	// 			description: state?.formError || 'An error occurred',
	// 			variant: 'destructive',
	// 		});
	// 	}
	// 	setLoading(false);
	// }, [state?.formError, state?.fieldError]);
	return (
		<FormWrapper open={open} formKey={'signin'} formValue="user">
			<div className={cn('grid gap-6', className)} {...props}>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSubmit)}>
						<div className="grid gap-4">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder="Your email address"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												type="password"
												placeholder="Password (min 8 characters)"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid mt-6">
							<div className="flex items-center">
								<Link
									href="/?signup=user"
									className="ml-auto inline-block text-sm underline">
									Don't have an account?
								</Link>
							</div>
							<Button disabled={loading} className="mt-4" type="submit">
								{loading && (
									<LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
								)}
								Signin
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</FormWrapper>
	);
}
export default Signin;
