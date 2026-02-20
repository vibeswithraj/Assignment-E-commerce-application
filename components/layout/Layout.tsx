import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen">
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
