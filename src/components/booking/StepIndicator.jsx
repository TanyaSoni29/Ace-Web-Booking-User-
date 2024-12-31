import { useLocation, useNavigate } from 'react-router-dom';

// Import an icon library like react-icons for a tick icon
import { FaCheck } from 'react-icons/fa';

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
						className={`flex items-center cursor-pointer ${
							index < currentStepIndex
								? 'text-green-600 font-bold' // Completed steps are green
								: index === currentStepIndex
								? 'text-gray-600 font-bold' // Current step is gray
								: 'text-gray-500' // Incomplete steps are gray
						}`}
						onClick={() => navigate(step.path)}
					>
						<div
							className={`flex items-center justify-center rounded-full w-8 h-8 p-2 border-[2px] ${
								index < currentStepIndex
									? 'border-green-600' // Green border for completed steps
									: 'border-gray-600' // Gray border for current and upcoming steps
							}`}
						>
							{index < currentStepIndex ? (
								<FaCheck className='text-green-600' /> // Display a tick icon for completed steps
							) : (
								<span>{index + 1}</span> // Display the step number for current and incomplete steps
							)}
						</div>
						<span className='ml-2'>{step.label}</span>
					</div>
					{index < steps.length - 1 && (
						<div
							className={`w-[200px] h-[2px] ml-2 ${
								index < currentStepIndex
									? 'bg-green-600' // Line is green for completed steps
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
