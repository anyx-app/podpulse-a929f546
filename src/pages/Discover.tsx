import React from 'react';
import { Play } from 'lucide-react';

export default function Discover() {
  const glassCard = "bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300";

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 rounded-3xl overflow-hidden mb-16 group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80 z-0" />
        <img 
          src="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Featured Podcast"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-700 z-[-1]"
        />
        
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white uppercase bg-[#1DB954] rounded-full">
            Editor's Choice
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white/95 mb-6 leading-tight">
            The Future of <br/> Artificial Intelligence
          </h1>
          <p className="text-lg text-slate-200 mb-8 max-w-xl leading-relaxed">
            Join Dr. Elena Ross as she explores the ethical implications of AGI in this week's deep dive episode.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-[#1DB954] text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-green-500/20 flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Listen Now
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
              More Info
            </button>
          </div>
        </div>
      </section>

      {/* Trending Grid */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white/90">Trending Now</h2>
          <button className="text-sm font-medium text-slate-400 hover:text-white transition-colors">See All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`group relative rounded-xl overflow-hidden ${glassCard} p-4 hover:-translate-y-2 hover:shadow-2xl`}>
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-slate-800">
                <img 
                   src={`https://source.unsplash.com/random/400x400?podcast&sig=${i}`} 
                   alt="Cover" 
                   className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl text-black">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </button>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 truncate">Design Matters</h3>
              <p className="text-sm text-slate-400 truncate">Debbie Millman</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Row */}
      <section>
        <h2 className="text-3xl font-semibold tracking-tight text-white/90 mb-8">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Technology', 'Comedy', 'True Crime', 'Business', 'News', 'Science'].map((cat, i) => (
            <div 
              key={cat} 
              className="relative h-40 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 group"
              style={{ backgroundColor: `hsl(${220 + (i * 30)}, 70%, 20%)` }}
            >
              <span className="absolute top-4 left-4 text-xl font-bold text-white z-10">{cat}</span>
              <img 
                src={`https://source.unsplash.com/random/200x200?${cat}`}
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg transform rotate-[25deg] shadow-lg group-hover:rotate-[30deg] transition-transform"
                alt={cat} 
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
