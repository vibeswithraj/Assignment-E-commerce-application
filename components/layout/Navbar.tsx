'use client';

import Link from 'next/link';
import { User, ShoppingCart, LogOut } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/useStore';
import { useState } from 'react';
import { selectCartItemCount } from '@/store/cartSlice';
import toast from 'react-hot-toast';
import type { User as UserType } from '@/types';
import Image from 'next/image';

interface NavbarProps {
  user: UserType | null;
}

interface NavLinks {
  name: string;
  path: string;
}

const navLinks: NavLinks[] = [
  {
    name: 'Products',
    path: '/products',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'About',
    path: '/about',
  },
];

const Navbar = ({ user }: NavbarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const cartCount = useAppSelector(selectCartItemCount);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      toast.success('Signed out successfully');
      router.push('/login');
      router.refresh();
    } catch {
      toast.error('Failed to sign out');
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <nav className="w-screen flex items-center justify-between px-8 py-2 border-b border-slate-800">
      <div className="space-x-16 flex items-center">
        <div className="flex items-center gap-2">
          <div className="size-6 text-primary">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <span className="text-white text-lg font-bold tracking-tight">
            LUXE
          </span>
        </div>
        <ul className="space-x-8 hidden md:block">
          {navLinks.map((link: NavLinks) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${pathname == link.path ? 'text-primary' : 'text-zinc-400 hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-3">
        <Link
          href="/cart"
          className="p-2.5 hover:bg-zinc-800 hover:text-primary rounded-full cursor-pointer"
        >
          <ShoppingCart size={18} />
        </Link>
        {user && (
          <div className="hidden md:flex items-center gap-3 ml-2 pl-3 border-l border-white/10">
            <div className="flex items-center gap-2">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.firstName}
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded-full object-cover"
                />
              ) : (
                <div className="w-7 h-7 bg-brand-700 rounded-full flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-brand-200" />
                </div>
              )}
              <span className="text-cream/70 font-body text-sm">
                {user.firstName}
              </span>
            </div>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="p-1.5 text-cream/40 hover:text-red-400 transition-colors"
              aria-label="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
