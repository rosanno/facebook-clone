import React, { useEffect, useState } from 'react';
import StoryCard from './StoryCard';

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
