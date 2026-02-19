'use client';

import { useState } from 'react';
import { z } from 'zod';
import Link from 'next/link';

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

type LoginFormData = z.infer<typeof loginSchema>;
type FormErrors = Partial<Record<keyof LoginFormData, string>>;

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LoginFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form className="space-y-6">
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
              placeholder="password"
              type="password"
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
        className="w-full h-14 bg-primary text-slate-900 font-bold rounded-lg hover:brightness-105 active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
