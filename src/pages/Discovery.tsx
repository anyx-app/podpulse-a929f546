import React from 'react';
import { Play } from 'lucide-react';

const FEATURED_PODCASTS = [
  { id: 1, title: 'Future of AI', author: 'Tech Insider', color: 'from-blue-600 to-cyan-500' },
  { id: 2, title: 'Design Matters', author: 'Creative Bloq', color: 'from-pink-600 to-rose-500' },
  { id: 3, title: 'Startup Stories', author: 'Founders Journal', color: 'from-amber-500 to-orange-600' },
  { id: 4, title: 'Mindful Living', author: 'Wellness Weekly', color: 'from-emerald-500 to-teal-600' },
];

export default function Discovery() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1DB954]/20 to-purple-900/40 border border-white/5 p-8 md:p-12">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-3 py-1 bg-[#1DB954]/20 text-[#1DB954] text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-[#1DB954]/20">
            Featured Show
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            The Sound of <br /> Innovation
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
            Dive deep into the stories shaping our future. Join us as we explore the cutting edge of technology, art, and culture.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-[#1DB954] text-black font-bold px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Listen Now
            </button>
            <button className="px-8 py-3 rounded-full border border-white/20 font-medium hover:bg-white/10 transition-all">
              More Info
            </button>
          </div>
        </div>
        
        {/* Abstract Background Decoration */}
        <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-[#1DB954] rounded-full blur-[128px] opacity-20 pointer-events-none"></div>
      </section>

      {/* Trending Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Trending Now</h2>
          <button className="text-sm text-white/50 hover:text-white transition-colors font-medium">View All</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PODCASTS.map((podcast) => (
            <div key={podcast.id} className="group relative bg-white/5 border border-white/5 hover:border-white/10 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">
              <div className={`aspect-square w-full rounded-lg bg-gradient-to-br ${podcast.color} mb-4 relative overflow-hidden shadow-inner`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                <button className="absolute bottom-3 right-3 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Play className="w-6 h-6 text-black fill-current ml-1" />
                </button>
              </div>
              <h3 className="font-semibold text-white text-lg truncate">{podcast.title}</h3>
              <p className="text-sm text-white/60">{podcast.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Episodes List */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">New Episodes for You</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group cursor-pointer">
              <div className="w-16 h-16 rounded-md bg-white/10 flex-shrink-0 flex items-center justify-center text-white/20 font-bold">
                IMG
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-white group-hover:text-[#1DB954] transition-colors truncate">Episode {i}: The Great Unfolding</h3>
                <p className="text-sm text-white/50 truncate">Deep Dive Podcast • 45 min</p>
              </div>
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
