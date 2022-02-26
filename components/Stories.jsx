import React, { useEffect, useState } from 'react';
import StoryCard from './StoryCard';

// const stories = [
//   {
//     name: 'Sonny Sangha',
//     src: 'https://links.papareact.com/zof',
//     profile: 'https://links.papareact.com/l4v',
//   },
//   {
//     name: 'Elon Musk',
//     src: 'https://links.papareact.com/4zn',
//     profile: 'https://links.papareact.com/KxK',
//   },
//   {
//     name: 'Jeff Bezoz',
//     src: 'https://links.papareact.com/k2j',
//     profile: 'https://links.papareact.com/f0p',
//   },
//   {
//     name: 'Mark Zuckerberg',
//     src: 'https://links.papareact.com/xql',
//     profile: 'https://links.papareact.com/snf',
//   },
//   {
//     name: 'Bill Gates',
//     src: 'https://links.papareact.com/4u4',
//     profile: 'https://links.papareact.com/zvy',
//   },
// ];

function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('https://reqres.in/api/users/');
      const users = await response.json();
      setStories(users);
    };

    getUsers();
  }, []);

  console.log(stories.data);

  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.data?.map((story, i) => (
        <StoryCard
          key={i}
          name={story.first_name}
          src={story.avatar}
          profile={story.avatar}
        />
      ))}
    </div>
  );
}

export default Stories;
