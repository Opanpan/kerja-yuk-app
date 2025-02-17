import { ClockArrowUp, Clock, Clock1 } from 'lucide-react';

export default function Activity() {
  return (
    <div className='mt-5'>
      <h1 className='font-bold'>Today's activity</h1>

      <div className='grid grid-cols-3 justify-between mt-4'>
        <div className='grid grid-cols-1 text-center'>
          <div className='flex justify-center text-red-600'>
            <Clock size={40} />
          </div>

          <h1 className='mt-4 font-bold'>08:30</h1>
          <p className='mt-1 font-light text-sm'>Check In</p>
        </div>

        <div className='grid grid-cols-1 text-center'>
          <div className='flex justify-center text-red-600'>
            <ClockArrowUp size={40} />
          </div>
          <h1 className='mt-4 font-bold text-lg text-red-600'>03:00:00</h1>
          <p className='mt-1 font-light text-sm'>Working Hours</p>
        </div>

        <div className='grid grid-cols-1 text-center'>
          <div className='flex justify-center text-red-600'>
            <Clock1 size={40} />
          </div>
          <h1 className='mt-4 font-bold'>--:--</h1>
          <p className='mt-1 font-light text-sm'>Check Out</p>
        </div>
      </div>
    </div>
  );
}
