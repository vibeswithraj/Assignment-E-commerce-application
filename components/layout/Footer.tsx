import { Globe, Instagram, AtSign, Send } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-screen border-t border-zinc-800 pt-24 pb-12">
      <div className="px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold uppercase">LUXE</h1>
            <p className="text-zinc-400 leading-relaxed max-w-xs">
              Elevating daily experiences through premium design and
              engineering. Join the elite community of visionaries.
            </p>
            <div className="flex gap-4">
              <Link
                className="w-10 h-10 rounded-full text-zinc-400 hover:text-zinc-50 bg-zinc-900 flex items-center justify-center hover:bg-zinc-800"
                href="#"
              >
                <Globe />
              </Link>
              <Link
                className="w-10 h-10 rounded-full text-zinc-400 hover:text-zinc-50 bg-zinc-900 flex items-center justify-center hover:bg-zinc-800"
                href="#"
              >
                <Instagram />
              </Link>
              <Link
                className="w-10 h-10 rounded-full text-zinc-400 hover:text-zinc-50 bg-zinc-900 flex items-center justify-center hover:bg-zinc-800"
                href="#"
              >
                <AtSign />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-8">Shop</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  Exclusive Drops
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  Outlet
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8">Support</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  Shipping &amp; Returns
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  Warranty Info
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="#">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8">Newsletter</h4>
            <p className="text-zinc-400 text-sm mb-6">
              Get early access to exclusive collection releases and technical
              insights.
            </p>
            <div className="relative">
              <input
                className="w-full bg-zinc-900 border-none rounded-lg py-4 pl-4 pr-12 focus:ring-1 focus:ring-white text-white"
                placeholder="Email address"
                type="email"
              />
              <button className="absolute cursor-pointer bg-background right-2 top-2 w-10 h-10 hover:bg-background/50 rounded-md flex items-center justify-center">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-xs font-medium">
          <p>© 2024 LUXE Global Enterprise. All rights reserved.</p>
          <div className="flex gap-8">
            <Link className="hover:text-zinc-300" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-zinc-300" href="#">
              Terms of Service
            </Link>
            <Link className="hover:text-zinc-300" href="#">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
