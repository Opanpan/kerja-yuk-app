import useWindowWidth from '../../hooks/useWindowWidth';

const onlinePerson = [
  {
    id: 1,
    name: 'Jeki',
    worksLocation: 'Sahid',
  },
  {
    id: 2,
    name: 'Jaka',
    worksLocation: 'Sahid',
  },
  {
    id: 3,
    name: 'Renata',
    worksLocation: 'WFH',
  },
  {
    id: 4,
    name: 'Udin',
    worksLocation: 'BSD',
  },
  {
    id: 5,
    name: 'Joko',
    worksLocation: 'BSD',
  },
  {
    id: 6,
    name: 'Risya',
    worksLocation: 'BSD',
  },
  {
    id: 7,
    name: 'Nesha',
    worksLocation: 'BSD',
  },
  {
    id: 8,
    name: 'Siti',
    worksLocation: 'WFG',
  },
  {
    id: 9,
    name: 'Siti',
    worksLocation: 'WFG',
  },
  {
    id: 10,
    name: 'Siti',
    worksLocation: 'WFG',
  },
  {
    id: 11,
    name: 'Siti',
    worksLocation: 'WFG',
  },
  {
    id: 12,
    name: 'Siti',
    worksLocation: 'WFG',
  },
  {
    id: 13,
    name: 'Siti',
    worksLocation: 'WFG',
  },
  {
    id: 14,
    name: 'Siti',
    worksLocation: 'WFG',
  },
  {
    id: 15,
    name: 'Siti',
    worksLocation: 'WFG',
  },
];

export default function OnlinePerson() {
  const width = useWindowWidth();

  const filterOnlinePersonByWindowWidth = () => {
    if (onlinePerson.length > 5) {
      if (width <= 375) {
        return onlinePerson.slice(0, 5);
      }
      if (width <= 425 && width >= 375) {
        return onlinePerson.slice(0, 6);
      }
      if (width <= 728 && width >= 425) {
        return onlinePerson.slice(0, 8);
      }
      if (width <= 1024 && width >= 728) {
        return onlinePerson.slice(0, 10);
      }
      return onlinePerson;
    }
    return onlinePerson;
  };

  const calculateRestOnlinePerson = () => {
    if (onlinePerson.length > 5) {
      if (width <= 375) {
        return onlinePerson.length - 5;
      }
      if (width <= 425 && width >= 375) {
        return onlinePerson.length - 6;
      }
      if (width <= 728 && width >= 425) {
        return onlinePerson.length - 8;
      }
      if (width <= 1024 && width >= 728) {
        return onlinePerson.length - 10;
      }
    }
    return 0;
  };

  return (
    <div className='mt-5 mb-14'>
      <h1 className='font-bold'>Online</h1>
      <div>
        <div className='flex flex-col items-center justify-center bg-white rounded-[20px] shadow-lg p-4'>
          <div className='flex items-center relative overflow-x-auto md:overflow-visible'>
            {filterOnlinePersonByWindowWidth().map((person, index) => (
              <div
                key={person.id}
                className={`w-14 overflow-hidden ${
                  index > 0 ? '-ml-4 md:ml-0' : ''
                }`}
              >
                <img
                  src='/profile-picture.png'
                  alt={person.name}
                  className='w-full h-full object-cover rounded-full border-2 border-white'
                />
                <p className='text-xs font-bold text-center mt-1'>
                  {person.name}
                </p>
                <p className='text-[10px] text-center'>
                  {person.worksLocation}
                </p>
              </div>
            ))}

            {calculateRestOnlinePerson() !== 0 && (
              <div className='w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white -ml-4 md:ml-0 self-start'>
                {calculateRestOnlinePerson()} More
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
