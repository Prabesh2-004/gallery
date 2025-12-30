import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children, setSearch }) => {
  return (
    <div>
      <Navbar setSearch={setSearch} />
      <div className='mt-24'>{children}</div>
    </div>
  );
};

export default Layout;
