import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  const nav = useNavigation()
  const isPageLoading = nav.state === 'loading'
  return (
    <>
    <Navbar />
      <div className="page">
        {isPageLoading ? <div className='container' style={{display:'grid', placeItems:'center'}}><div className="loading" style={{marginTop:'2rem'}}/> </div>: <Outlet />}
      </div>
    </>
  );
};

export default HomeLayout;
