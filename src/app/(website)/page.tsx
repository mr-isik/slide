import WebsiteNav from '@/components/global/navbar';
import Hero from '@/components/sections/hero';
import Pricing from '@/components/sections/pricing';
import React from 'react';

const Home = () => {
  return (
    <>
      <WebsiteNav />
      <Hero />
      <Pricing />
    </>
  );
};

export default Home;
