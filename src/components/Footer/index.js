import React from 'react';
import { Home, CalendarCheck, FileText, Settings, LogOut } from 'lucide-react';

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200'>
      <div className='grid grid-cols-5 py-3 relative'>
        <NavItem icon={<Home size={24} />} label='Home' active />
        <NavItem icon={<CalendarCheck size={24} />} label='Attendance' />

        <div className='flex flex-col items-center text-red-500'>
          <div className='absolute top-[-30px] w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:cursor-pointer'>
            <LogOut size={28} color='white' />
          </div>
        </div>

        <NavItem icon={<FileText size={24} />} label='Form' />
        <NavItem icon={<Settings size={24} />} label='Setting' />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active }) => {
  return (
    <div
      className={`flex flex-col items-center ${
        active ? 'text-red-600' : 'text-gray-400'
      } hover:cursor-pointer`}
    >
      {icon}
      <span className='text-xs font-semibold'>{label}</span>
    </div>
  );
};

export default Footer;
