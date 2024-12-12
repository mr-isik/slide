import InfoBar from '@/components/global/infobar/index';
import Sidebar from '@/components/global/sidebar';
import React from 'react';

type Props = {
  children: React.ReactNode;
  params: {
    slug: string;
  };
};

const DashboardLayout = ({ children, params }: Props) => {
  /* Query */
  /* WIP: Query client fetch data */

  return (
    <main className='p-3'>
      {/* Sidebar */}
      <Sidebar slug={params.slug} />

      {/* Navbar */}
      <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
        <InfoBar slug={params.slug} />
      </div>
    </main>
  );
};

export default DashboardLayout;
