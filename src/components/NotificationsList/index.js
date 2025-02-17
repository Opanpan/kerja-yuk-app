import { motion } from 'framer-motion';
import {
  X,
  ArrowLeft,
  ArrowRight,
  CircleDollarSign,
  Check,
  PillBottle,
  Clock,
} from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'Reimbursement',
    message: "Your submission 'Lorem ipsum dolor sit amet…' has been paid.",
    date: 'Today',
    status: 'paid',
    icon: <CircleDollarSign size={24} />,
    markedAsRead: true,
  },
  {
    id: 2,
    title: 'Sickness',
    message: 'Your submission has been approved by the Superior.',
    date: '2022-10-05',
    status: 'approved',
    icon: <PillBottle size={24} />,
    markedAsRead: true,
  },
  {
    id: 3,
    title: 'Overtime',
    message: 'Your submission has been rejected, please confirm.',
    date: '2022-10-05',
    status: 'rejected',
    icon: <Clock size={24} />,
    markedAsRead: false,
  },
  {
    id: 4,
    title: 'Reimbursement',
    message:
      'Your submission will be processed according to the reimbursement schedule. Please Wait',
    date: '2022-10-05',
    status: 'processed',
    icon: <CircleDollarSign size={24} />,
    markedAsRead: true,
  },
];

const RenderStatusIcon = ({ status }) => {
  let attributeClass =
    'absolute bottom-[-5px] right-[-5px] flex items-center justify-center w-[20px] h-[20px] rounded-full text-white';

  if (['approved', 'paid'].includes(status)) {
    attributeClass += ' bg-green-500';
  } else if (status === 'rejected') {
    attributeClass += ' bg-red-500';
  } else if (status === 'processed') {
    attributeClass += ' bg-blue-500';
  }

  const StatusIcon = () => {
    if (['approved', 'paid'].includes(status)) {
      return <Check size={16} />;
    } else if (status === 'rejected') {
      return <X size={16} />;
    } else if (status === 'processed') {
      return <ArrowRight size={16} />;
    }
  };

  return (
    <div className={attributeClass}>
      <StatusIcon />
    </div>
  );
};

const BoldMessageStatus = ({ message, wordsToBold }) => {
  return (
    <p>
      {message
        .split(new RegExp(`(${wordsToBold.join('|')})`, 'gi'))
        .map((part, index) =>
          wordsToBold.includes(part.toLowerCase()) ? (
            <strong key={index}>{part}</strong>
          ) : (
            part
          )
        )}
    </p>
  );
};

const NotificationList = ({ isOpen, setIsOpen }) => {
  const boldMessage = ['paid', 'approved', 'rejected', 'reviewed', 'processed'];

  return (
    <div className='relative z-[99999999]'>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 100 }}
          className='fixed top-0 right-0 h-full w-80 bg-white shadow-lg border-l border-gray-200'
        >
          <div className='flex gap-3 items-center p-4'>
            <button onClick={() => setIsOpen(false)}>
              <ArrowLeft size={24} />
            </button>
            <h2 className='text-red-600 font-bold text-lg'>Notification</h2>
          </div>

          <div>
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`flex gap-3 items-start p-4 ${
                  notif.markedAsRead ? 'bg-blue-100' : ''
                }`}
              >
                <div className='relative'>
                  <div className='bg-gradient-to-r from-red-600  to-pink-700 text-white rounded-xl p-3'>
                    {notif.icon}
                  </div>
                  <RenderStatusIcon status={notif.status} />
                </div>

                <div>
                  <div className='flex justify-between'>
                    <h3 className='font-bold'>{notif.title}</h3>
                    <p className='text-xs text-gray-400 mt-1'>{notif.date}</p>
                  </div>

                  <BoldMessageStatus
                    message={notif.message}
                    wordsToBold={boldMessage}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NotificationList;
