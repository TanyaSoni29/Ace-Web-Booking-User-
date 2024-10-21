/** @format */

import { useLocation, useNavigate } from 'react-router-dom';

const steps = [
	{ path: '/', label: 'Location' },
	{ path: '/select-vehicle', label: 'Vehicle Selection' },
	{ path: '/booking-details', label: 'Booking Details' },
	{ path: '/confirmation', label: 'Confirmation' },
];

const StepIndicator = () => {
	const location = useLocation();
	const navigate = useNavigate();

	// Find the index of the current path in the steps array
	const currentStepIndex = steps.findIndex(
		(step) => step.path === location.pathname
	);

	return (
		<div className='flex justify-center my-4 gap-2'>
			{steps.map((step, index) => (
				<div
					key={step.path}
					className='flex items-center'
				>
					<div
						className={`cursor-pointer ${
							index < currentStepIndex
								? 'text-green-600 font-bold' // Completed steps are green
								: index === currentStepIndex
								? 'text-gray-600 font-bold' // Current step is blue
								: 'text-gray-500' // Incomplete steps are gray
						}`}
						onClick={() => navigate(step.path)}
					>
						{index + 1}. {step.label}
					</div>
					{index < steps.length - 1 && (
						<div
							className={`w-[200px] h-[2px] ml-2 ${
								index < currentStepIndex
									? 'bg-green-600' // Line is green for completed steps
									: index === currentStepIndex
									? 'bg-gray-600' // Line is blue for current step
									: 'bg-gray-500' // Line is gray for incomplete steps
							}`}
						></div>
					)}
				</div>
			))}
		</div>
	);
};

export default StepIndicator;
