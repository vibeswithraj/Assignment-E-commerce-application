import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <main className="w-full h-[calc(100vh-54.8px)]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
