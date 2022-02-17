import Image from 'next/image';

function StoryCard({ name, src, profile }) {
  return (
    <div
      className='relative h-14 w-14 md:h-20 md:w-20 lg:h-40
     lg:w-28 cursor-pointer overflow-x p-3 transition duration-200 
     transform ease-in hover:scale-105 hover:animate-pulse
    '
    >
      <Image
        className='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10'
        src={profile}
        alt=''
        width={40}
        height={40}
        layout='fixed'
        objectFit='cover'
      />
      <Image
        className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
        src={src}
        alt=''
        layout='fill'
      />
    </div>
  );
}

export default StoryCard;
