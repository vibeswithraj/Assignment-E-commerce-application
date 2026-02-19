import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0f10]">
        {/* <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px]"></div>
        </div> */}
        <div className="max-w-[1440px] mx-auto px-8 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                New Collection Out Now
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-manrope leading-[0.95] tracking-tight">
              The New Standard of{' '}
              <span className="text-primary italic">Excellence.</span>
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-lg leading-relaxed">
              Precision-engineered acoustics meet minimalist luxury. Experience
              sound as it was intended to be heard.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <button className="bg-primary hover:bg-primary/90 font-extrabold px-10 py-5 rounded-lg text-lg transition-transform active:scale-95 cursor-pointer">
                Shop The Collection
              </button>
              <button className="group flex items-center gap-2 px-6 py-5 rounded-lg font-bold text-slate-300 hover:text-white transition-colors cursor-pointer">
                Watch Film{' '}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  <Play />
                </span>
              </button>
            </div>
          </div>
          <div className="relative">
            {/* <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div> */}
            <Image
              width={400}
              height={400}
              className="w-full h-auto drop-shadow-2xl"
              alt="High-end professional over-ear silver headphones"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyBpCm4UfpAFZPpopaT7ESAJdYcYKf-8mmPuciGUJP_k0qekpME_zknCSsz6ki2yXDjDuw90SEMmxrhkfr2aLOUaWlptPneJgjPNQzNDiUfrhoGKgVQ4FOy33ebht_Sy1AJnyK7D60xgqY1rtcWzwA7qG0S5xizvDR6YjERiE61YirIXhruegrsq3F0GVEGrcThxfj7SpUmOcd-y9db-QVRVoDQocOt1aEvOCqULUVuycP4Gfuqw0OVZgMC_py8myzZ2fsGVBDd10"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
