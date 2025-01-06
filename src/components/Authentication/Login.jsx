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
		<div className='flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat'>
			<div className='flex justify-center items-center w-full md:w-[40vh] p-4 md:p-0 backdrop-blur-lg rounded-lg'>
				<div className='bg-white bg-opacity-85 rounded-lg w-full shadow-lg p-6 flex flex-col items-center'>
					<h2 className='text-2xl text-blue-700 font-bold mb-6'>
						{isSignUp ? 'Sign up' : 'Sign in'}
					</h2>

					<form
						onSubmit={handleSubmit}
						className='w-full flex flex-col items-center'
					>
						<input
							type='email'
							name='email'
							placeholder='Enter your email'
							className='w-5/6 p-3 mb-4 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-700'
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<input
							type='password'
							name='password'
							placeholder='Enter your password'
							className='w-5/6 p-3 mb-4 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-700'
							value={formData.password}
							onChange={handleChange}
							required
						/>
						{isSignUp && (
							<input
								type='password'
								name='confirmPassword'
								placeholder='Confirm your password'
								className='w-5/6 p-3 mb-4 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-700'
								value={formData.confirmPassword}
								onChange={handleChange}
								required
							/>
						)}
						<button
							type='submit'
							className='bg-blue-700 text-white py-3 w-5/6 rounded font-bold hover:bg-gray-800 transition duration-300'
						>
							{isSignUp ? 'Sign up' : 'Sign in'}
						</button>
					</form>

					<p className='mt-4 text-sm'>
						{isSignUp ? (
							<>
								Already have an account?{' '}
								<a
									href='#'
									onClick={toggleForm}
									className='text-blue-700 hover:underline'
								>
									Sign in
								</a>
							</>
						) : (
							<>
								Don’t have an account?{' '}
								<a
									href='#'
									onClick={toggleForm}
									className='text-blue-700 hover:underline'
								>
									Sign up
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
