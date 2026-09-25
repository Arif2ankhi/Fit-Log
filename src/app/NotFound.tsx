import Link from 'next/link';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 overflow-hidden px-6 py-24">
      {/* Background Decorative Gradients & Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="relative z-10 max-w-xl text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium tracking-wide">
          <Compass className="w-3.5 h-3.5 animate-spin-slow" />
          <span>Error 404</span>
        </div>

        {/* Large 404 Display */}
        <div className="relative">
          <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-slate-100 via-slate-300 to-slate-600 select-none">
            404
          </h1>
        </div>

        {/* Messaging */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Page not found
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-md mx-auto">
            Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or never existed in the first place.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/25 active:scale-95"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-sm transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

        {/* Helpful Secondary Links */}
        <div className="pt-8 border-t border-slate-800/80">
          <p className="text-xs text-slate-500 mb-4">Or try searching one of these popular pages:</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            <Link href="/workouts" className="hover:text-indigo-400 transition-colors">
              Workouts
            </Link>
            <span className="text-slate-800">•</span>
            <Link href="/docs" className="hover:text-indigo-400 transition-colors">
              Documentation
            </Link>
            <span className="text-slate-800">•</span>
            <Link href="/support" className="hover:text-indigo-400 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}