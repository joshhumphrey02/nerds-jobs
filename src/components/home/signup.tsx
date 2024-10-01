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
import {
	AuthSignupFormInput,
	AuthSignupFormSchema,
} from '@/lib/validators/auth';
import { useFormState } from 'react-dom';
import { LoaderIcon } from 'lucide-react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	open: boolean;
}

function Signup({ open, className, ...props }: Props) {
	const form = useForm<AuthSignupFormInput>({
		resolver: zodResolver(AuthSignupFormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			password: '',
			businessName: '',
			countryCode: 'NG',
			country: 'Nigeria',
		},
	});
	const [loading, setLoading] = React.useState(false);
	// const [state, dispatch] = useFormState(login, undefined);
	async function handleSubmit(data: AuthSignupFormInput) {
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
		<FormWrapper open={open} formKey={'signup'} formValue="user">
			<div className={cn('grid gap-6', className)} {...props}>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSubmit)}>
						<div className="grid gap-4">
							<div className="grid grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>First name</FormLabel>
											<FormControl>
												<Input placeholder="Your first name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last name</FormLabel>
											<FormControl>
												<Input placeholder="Your last name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

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
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone Number</FormLabel>
										<FormControl>
											<Input
												type="text"
												placeholder="Phone Number"
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
										<FormLabel>Password</FormLabel>
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
							<div className="grid mt-4">
								<div className="flex items-center">
									<Link
										href="/?signup=user"
										className="ml-auto inline-block text-sm underline">
										Already have an account?
									</Link>
								</div>
								<Button disabled={loading} className="mt-4" type="submit">
									{loading && (
										<LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
									)}
									Continue
								</Button>
							</div>
						</div>
					</form>
				</Form>
			</div>
		</FormWrapper>
	);
}

export default Signup;
