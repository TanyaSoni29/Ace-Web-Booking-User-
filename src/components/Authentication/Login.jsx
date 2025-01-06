/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
	const [isSignUp, setIsSignUp] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const navigate = useNavigate();

	const toggleForm = (e) => {
		e.preventDefault();
		setIsSignUp(!isSignUp);
		setFormData({ email: '', password: '', confirmPassword: '' });
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Add validation logic here as needed...
		if (isSignUp) {
			if (formData.password.length < 6) {
				console.log('Password too short');
				return;
			}

			if (formData.password !== formData.confirmPassword) {
				console.log('Passwords do not match');
				return;
			}

			console.log('Sign Up data:', formData);
		} else {
			if (!formData.email || !formData.password) {
				console.log('Missing email or password');
				return;
			}

			console.log('Sign In data:', formData);
		}

		navigate('/bookinghistory');
	};

	return (
		<div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-blue-800'>
			<div className='w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
				<div className='p-6'>
					<h2 className='text-3xl font-bold text-blue-700 text-center mb-4'>
						{isSignUp ? 'Sign up' : 'Sign in'}
					</h2>
					<p className=' text-gray-500 text-center mb-6'>
						{isSignUp
							? 'Create an account to get started.'
							: 'Welcome back! Please login to your account.'}
					</p>

					<form onSubmit={handleSubmit} className='space-y-4'>
						<div>
							<label
								htmlFor='email'
								className='block bg-white text-gray-600 font-medium mb-1'
							>
								Email Address
							</label>
							<input
								type='email'
								name='email'
								placeholder='Enter your email'
								className='w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500'
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>

						<div>
							<label
								htmlFor='password'
								className='block text-gray-600 font-medium mb-1'
							>
								Password
							</label>
							<input
								type='password'
								name='password'
								placeholder='Enter your password'
								className='w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500'
								value={formData.password}
								onChange={handleChange}
								required
							/>
						</div>

						{isSignUp && (
							<div>
								<label
									htmlFor='confirmPassword'
									className='block text-gray-600 font-medium mb-1'
								>
									Confirm Password
								</label>
								<input
									type='password'
									name='confirmPassword'
									placeholder='Confirm your password'
									className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500'
									value={formData.confirmPassword}
									onChange={handleChange}
									required
								/>
							</div>
						)}

						<button
							type='submit'
							className='w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition duration-300'
						>
							{isSignUp ? 'Create Account' : 'Log In'}
						</button>
					</form>

					<p className='mt-6 text-center text-sm'>
						{isSignUp ? (
							<>
								Already have an account?{' '}
								<a
									href='#'
									onClick={toggleForm}
									className='text-blue-700 font-medium hover:underline'
								>
									Log In
								</a>
							</>
						) : (
							<>
								Don’t have an account?{' '}
								<a
									href='#'
									onClick={toggleForm}
									className='text-blue-700 font-medium hover:underline'
								>
									Create one
								</a>
							</>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;
