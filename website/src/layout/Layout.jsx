import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import UtilityBar from './UtilityBar';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <UtilityBar />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
