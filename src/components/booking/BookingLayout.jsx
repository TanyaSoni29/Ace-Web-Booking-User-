/** @format */

import { Outlet } from 'react-router-dom';
import StepIndicator from '../booking/StepIndicator';

const BookingLayout = () => {
	return (
		<div className='flex flex-col h-full'>
			<StepIndicator />
			<div className='flex-1 overflow-auto'>
				<Outlet />
			</div>
		</div>
	);
};

export default BookingLayout;
