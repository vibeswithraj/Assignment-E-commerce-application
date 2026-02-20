'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Loader2, ArrowRight } from 'lucide-react';
import { AuthResponse } from '@/types';

interface LoginFormData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      return toast.error('Username and Password is required!');
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DUMMYJSON_BASE_URL}/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
            expiresInMins: 60,
          }),
        },
      );

      const data: AuthResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      toast.success(`Welcome back, ${data.firstName}!`);
      router.push('/products');
      router.refresh();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed';
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="space-y-2 flex flex-col">
          <label className="text-slate-500 font-medium" htmlFor="username">
            Username
          </label>
          <input
            className="block w-full h-14 px-4 py-3 text-slate-900 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="space-y-1">
          <div className="space-y-2 flex flex-col">
            <label className="text-slate-500 font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="block w-full h-14 px-4 py-3 text-slate-900 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            <div className="flex justify-end">
              <Link
                className="text-sm font-semibold text-primary hover:underline decoration-2 underline-offset-4"
                href="#"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button
        className="w-full h-14 inline-flex items-center justify-center gap-2 cursor-pointer bg-primary text-slate-900 font-bold rounded-lg hover:brightness-105 active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Signing in...</span>
          </>
        ) : (
          <>
            <span>Sign in</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
};

export default LoginForm;
