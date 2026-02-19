import Link from 'next/link';
import LoginForm from './LoginForm';

const page = () => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
        <img
          alt="Premium minimalist watch on a stone surface"
          className="absolute inset-0 w-full h-full object-cover"
          data-alt="High-end lifestyle product photography with elegant lighting"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEHH0roY4DJ2tuJDS5BzfXgTDsp92r78Kk2nda7znOpw8jDU0PwS3mxaET0x74x4ZKVZgwhMD0dYcD0FC_rfgPGpRsV31e1XtrO0l6YHc0t7VaqSHTWEHbPL2hnUOByXI2wwgalMr_P_EtTbZBFAQu85DOitlqmz9P6IZjkN0qUjVANxbClrLEzgX7F23Ac34bxu8YaHoyfSNGV4IBc3t0kkcowewwFRJbhGZfJn-SOpkWFdpJEB_BvxYpSCWZKu8h-2jOH8jDmSg"
        />
        <div className="relative z-20 flex flex-col justify-between p-16 h-full">
          <div className="flex items-center gap-2">
            <div className="size-8 text-primary">
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
            <span className="text-white text-xl font-bold tracking-tight">
              LUXE.
            </span>
          </div>
          <div>
            <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
              The art of <br />
              <span className="text-primary">refined</span> living.
            </h1>
            <p className="text-slate-300 text-lg max-w-md">
              Access our exclusive collection of high-end consumer goods curated
              for the modern connoisseur.
            </p>
          </div>
          <div className="text-slate-400 text-sm">
            © 2024 Premium E-commerce Platform. All rights reserved.
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-16 lg:p-24">
        <div className="w-full max-w-[440px] space-y-10">
          <div className="space-y-2">
            <div className="lg:hidden flex items-center gap-2 mb-8">
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
              <span className="text-slate-900 text-lg font-bold tracking-tight">
                LUXE.
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Welcome back
            </h2>
            <p className="text-slate-500 font-medium">
              Please enter your details to sign in.
            </p>
          </div>
          <LoginForm />
          <p className="text-center text-slate-500 font-medium">
            Don’t have an account?
            <Link
              className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1"
              href="#"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
