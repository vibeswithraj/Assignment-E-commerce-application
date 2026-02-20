'use client';

import Link from 'next/link';
import { User, ShoppingCart } from 'lucide-react';
import { usePathname } from 'next/navigation';

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

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-screen flex items-center justify-between px-8 py-2 border-b border-slate-800">
      <div className="space-x-16 flex items-center">
        <span className="block text-2xl font-semibold uppercase">LUXE</span>
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
        <button className="p-2.5 hover:bg-zinc-800 rounded-full cursor-pointer">
          <ShoppingCart size={18} />
        </button>
        <button className="p-2 hover:bg-zinc-800 rounded-full cursor-pointer">
          <User size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
