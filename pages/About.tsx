import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_TEXT_FULL, MISSION_TEXT, VISION_TEXT, VALUES } from '../constants';
import { Target, Eye, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Editorial Header */}
      <div className="px-6 lg:px-12 py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-trio-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8">
            <h1 className="text-6xl lg:text-8xl font-display font-bold text-slate-900 tracking-tighter leading-[0.9]">
              Quem <br/>Somos.
            </h1>
            <p className="text-xl text-slate-500 pb-4 lg:ml-12 max-w-xl font-light">
              Mais do que fornecedores, somos parceiros no desenvolvimento científico e industrial de Moçambique.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column - History */}
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 bg-trio-blue/10 text-trio-blue text-xs font-bold uppercase tracking-widest rounded-full mb-8">Nossa História</span>
            <div className="prose prose-lg text-slate-600 prose-headings:font-display">
              {ABOUT_TEXT_FULL.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-8 text-justify leading-loose">{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                 <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
                    <Target size={80} />
                 </div>
                 <h3 className="font-display font-bold text-2xl mb-4 relative z-10">Missão</h3>
                 <p className="text-sm text-slate-300 leading-relaxed relative z-10">{MISSION_TEXT}</p>
               </div>
               
               <div className="p-8 rounded-3xl bg-trio-blue text-white relative overflow-hidden group hover:shadow-glow-blue transition-all duration-300">
                 <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform">
                    <Eye size={80} />
                 </div>
                 <h3 className="font-display font-bold text-2xl mb-4 relative z-10">Visão</h3>
                 <p className="text-sm text-white/90 leading-relaxed relative z-10">{VISION_TEXT}</p>
               </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
                <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-12 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                   <img 
                     src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1000&auto=format&fit=crop" 
                     alt="Lab Equipment" 
                     className="w-full h-full object-cover"
                   />
                </div>

                <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Valores Fundamentais</h2>
                <div className="space-y-4">
                  {VALUES.map((val, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                    >
                      <div className="p-2 bg-slate-50 text-trio-blue rounded-lg">
                        {val.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-1">{val.title}</h4>
                        <p className="text-slate-500 text-xs">{val.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};