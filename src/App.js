import './App.css';
import Activity from './components/Activity';
import Footer from './components/Footer';
import News from './components/News';
import NotificationList from './components/NotificationsList';
import OnlinePerson from './components/OnlinePerson';
import ProfileCard from './components/ProfileCard';
import { Bell } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-col p-6'>
      <div className='flex justify-between'>
        <h1 className='font-extrabold text-xl text-red-600'>KerjaYuk!</h1>
        <Bell
          onClick={() => setIsOpen(true)}
          className='hover:cursor-pointer'
          size={24}
        />
      </div>

      <p className='mt-5 mb-4 text-sm'>Hi, Good Morning!</p>

      <ProfileCard />

      <Activity />

      <News />

      <OnlinePerson />

      <NotificationList isOpen={isOpen} setIsOpen={setIsOpen} />
      <Footer />
    </div>
  );
}

export default App;
