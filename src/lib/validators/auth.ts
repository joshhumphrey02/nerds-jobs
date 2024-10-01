import { z } from 'zod';

export const AuthLoginSchema = z.object({
	email: z.string().email('Please enter a valid email.'),
	password: z
		.string()
		.min(8, 'Password is too short. Minimum 8 characters required.')
		.max(255),
});
export type AuthLoginInput = z.infer<typeof AuthLoginSchema>;

export const AuthSignupFormSchema = z.object({
	firstName: z.string().min(2, {
		message: 'Your first name must be at least 2 characters.',
	}),
	lastName: z.string().min(2, {
		message: 'Your last name must be at least 2 characters.',
	}),
	email: z.string().email({
		message: 'Please enter a valid email address.',
	}),
	phone: z.string().min(10, {
		message: 'Please enter a valid phone number.',
	}),
	password: z.string().min(8, {
		message: 'Your password must be at least 8 characters.',
	}),
	businessName: z.string().min(2, {
		message: 'Your business name must be at least 2 characters.',
	}),
	country: z.string().min(2, {
		message: 'Please select your country.',
	}),
	countryCode: z.string().min(2, {
		message: 'Please select your country code.',
	}),
	id: z.string().optional(),
	city: z.string().optional(),
	state: z.string().optional(),
});
export type AuthSignupFormInput = z.infer<typeof AuthSignupFormSchema>;
