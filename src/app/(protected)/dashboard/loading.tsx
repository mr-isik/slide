import Loader from '@/components/global/loader';
import React from 'react';

const Loading = () => {
  return (
    <aside className='h-screen flex items-center justify-center'>
      <Loader state>Loading...</Loader>
    </aside>
  );
};

export default Loading;
