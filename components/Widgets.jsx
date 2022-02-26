import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import Contact from './Contact';

function Widgets() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch('https://reqres.in/api/users/');
      const contacts = await response.json();
      setContacts(contacts);
    };

    getContacts();
  }, []);

  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-2xl'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6' />
          <SearchIcon className='h-6' />
          <DotsHorizontalIcon className='h-6' />
        </div>
      </div>

      {contacts.data?.map((contact) => (
        <Contact
          key={contact.id}
          src={contact.avatar}
          name={`${contact.first_name} ${contact.last_name}`}
        />
      ))}
    </div>
  );
}

export default Widgets;
