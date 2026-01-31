import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Play, Pause, SkipBack, SkipForward, Search, User, 
  Home, Library, Mic2, Heart, Menu, X 
} from 'lucide-react';
import { cn } from '../../lib/utils';

export default function AppShell() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Glassmorphism classes from standards
  const glassPanel = "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]";
  
  return (
    <div className="min-h-screen bg-[#191414] text-slate-300 font-sans flex flex-col relative overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#1DB954]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="flex flex-1 h-[calc(100vh-6rem)]">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex w-64 flex-col gap-8 p-6 bg-black/20 border-r border-white/5">
          <Link to="/" className="flex items-center gap-3 px-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1DB954] to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-900/20">
              <Mic2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white/90">PodPulse</span>
          </Link>

          <nav className="flex flex-col gap-2">
            <NavLink to="/" icon={<Home />} label="Discover" active={isActive('/')} />
            <NavLink to="/search" icon={<Search />} label="Search" active={isActive('/search')} />
            <NavLink to="/library" icon={<Library />} label="Your Library" active={isActive('/library')} />
          </nav>

          <div className="mt-auto">
            <div className={`p-4 rounded-xl ${glassPanel}`}>
              <p className="text-sm font-semibold text-white/90 mb-1">Go Premium</p>
              <p className="text-xs text-slate-400 mb-3">Ad-free listening & offline mode.</p>
              <button className="w-full py-2 bg-white text-black text-xs font-bold rounded-full hover:scale-105 transition-transform duration-300">
                Upgrade Plan
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top Bar (Mobile Menu + Profile) */}
          <header className="h-20 flex items-center justify-between px-8 bg-transparent z-20">
             {/* Mobile Menu Toggle */}
             <button 
              className="md:hidden text-white/80"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Spacer for desktop layout balance */}
            <div className="hidden md:block"></div>

            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/60 transition-all">
                <Search className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full bg-[#191414] flex items-center justify-center">
                  <User className="w-5 h-5 text-white/90" />
                </div>
              </button>
            </div>
          </header>

          {/* Scrollable Page Content */}
          <main className="flex-1 overflow-y-auto px-4 md:px-8 pb-32 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            <div className="container mx-auto max-w-7xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>

      {/* Persistent Player Footer */}
      <footer className={`fixed bottom-0 left-0 right-0 h-24 px-6 z-50 ${glassPanel} border-t border-white/10 flex items-center justify-between`}>
        <div className="flex items-center gap-4 w-1/3 min-w-[180px]">
           <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-700 to-cyan-500 flex items-center justify-center shadow-lg">
              <Mic2 className="w-8 h-8 text-white/20" />
           </div>
           <div className="hidden sm:block">
             <h4 className="text-sm font-semibold text-white/90 hover:underline cursor-pointer">Tech Trends Daily</h4>
             <p className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer">Sarah Jenkins</p>
           </div>
           <button className="ml-4 text-white/40 hover:text-[#1DB954] transition-colors">
             <Heart className="w-5 h-5" />
           </button>
        </div>

        <div className="flex flex-col items-center gap-2 flex-1 max-w-2xl">
          <div className="flex items-center gap-6">
            <button className="text-white/60 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl shadow-white/10"
            >
              {isPlaying ? <Pause className="w-5 h-5 text-black fill-current" /> : <Play className="w-5 h-5 text-black fill-current ml-1" />}
            </button>
            <button className="text-white/60 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full flex items-center gap-3 text-xs text-white/40 font-medium">
            <span>2:14</span>
            <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden cursor-pointer group relative">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-white group-hover:bg-[#1DB954] transition-colors rounded-full"></div>
            </div>
            <span>45:30</span>
          </div>
        </div>

        <div className="hidden md:flex w-1/3 justify-end items-center gap-2">
           {/* Volume controls could go here */}
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, icon, label, active }: { to: string, icon: React.ReactNode, label: string, active: boolean }) {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group",
        active 
          ? "bg-white/10 text-white font-medium" 
          : "text-slate-400 hover:text-white hover:bg-white/5"
      )}
    >
      <span className={cn("transition-colors", active ? "text-[#1DB954]" : "text-slate-400 group-hover:text-white")}>
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
}
