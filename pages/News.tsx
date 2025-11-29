import React from 'react';
import { NEWS_ITEM } from '../constants';
import { Link } from 'react-router-dom';

export const News: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        
        <div className="mb-8 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
          <span>{NEWS_ITEM.date}</span>
          <span className="w-px h-3 bg-slate-300"></span>
          <span>Corporativo</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
          {NEWS_ITEM.title}
        </h1>

        <div className="w-full h-80 bg-slate-100 mb-12 grayscale">
           <img 
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop" 
              alt="Lab training" 
              className="w-full h-full object-cover"
            />
        </div>

        <div className="prose prose-lg prose-slate text-slate-600 prose-headings:font-display prose-headings:font-bold">
          {NEWS_ITEM.content.split('\n\n').map((para, idx) => (
            <p key={idx} className="mb-6">{para}</p>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-slate-200">
          <Link to="/" className="text-trio-blue font-bold text-sm uppercase tracking-widest hover:text-slate-900 transition-colors">
            ← Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
};