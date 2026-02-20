import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';

const Layout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();
  console.log(user);

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="w-screen">
      <Navbar user={user} />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
