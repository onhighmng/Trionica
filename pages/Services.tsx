import React, { useEffect, useState } from 'react';
import { SERVICES } from '../constants';
import { Check, FlaskConical, Stethoscope, Droplet, Sprout, Pickaxe, ArrowRight, Download } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const getIconForService = (id: string) => {
  const props = { className: "w-6 h-6" };
  switch (id) {
    case 'ensino': return <FlaskConical {...props} />;
    case 'saude': return <Stethoscope {...props} />;
    case 'aguas': return <Droplet {...props} />;
    case 'ambiente': return <Sprout {...props} />;
    case 'minas': return <Pickaxe {...props} />;
    default: return <Check {...props} />;
  }
};

const getThemeColor = (id: string) => {
  switch (id) {
    case 'ensino': return 'text-trio-blue bg-trio-blue/10';
    case 'saude': return 'text-trio-red bg-trio-red/10';
    case 'aguas': return 'text-trio-blue bg-trio-blue/10';
    case 'ambiente': return 'text-trio-green bg-trio-green/10';
    case 'minas': return 'text-trio-yellow bg-trio-yellow/10';
    default: return 'text-slate-600 bg-slate-100';
  }
};

export const Services: React.FC = () => {
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState(SERVICES[0].id);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        setActiveSection(id);
      }
    } else {
        window.scrollTo(0,0);
    }
  }, [hash]);

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = SERVICES.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Header */}
      <div className="relative bg-slate-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-trio-blue/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-trio-blue mb-6">Portfólio Técnico</p>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Soluções Especializadas
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Equipamento de alta precisão para os desafios mais complexos de Moçambique.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sticky Sidebar Navigation */}
          <div className="hidden lg:block w-1/4 h-full sticky top-32">
            <div className="flex flex-col gap-2 border-l-2 border-slate-100 pl-6 relative">
              {SERVICES.map((service) => (
                <a 
                  key={service.id}
                  href={`#${service.id}`}
                  className={`py-3 text-sm font-bold transition-all duration-300 flex items-center gap-3 ${
                    activeSection === service.id 
                      ? 'text-slate-900 translate-x-2' 
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(service.id)?.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(service.id);
                  }}
                >
                  <span className={`w-2 h-2 rounded-full transition-colors ${activeSection === service.id ? 'bg-trio-blue' : 'bg-transparent'}`}></span>
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-3/4 flex flex-col gap-32">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id} 
                id={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-xl ${getThemeColor(service.id)}`}>
                    {getIconForService(service.id)}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{service.title}</h2>
                </div>

                <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 p-8 z-20">
                    <p className="text-white text-lg font-medium max-w-xl">{service.shortDescription}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-2">
                       <span className="w-4 h-[2px] bg-slate-900"></span>
                       Descrição
                    </h3>
                    <p className="text-slate-600 leading-loose text-justify">
                      {service.fullDescription}
                    </p>
                    
                    <div className="mt-8 flex gap-4">
                      <button className="px-6 py-3 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-trio-blue transition-colors">
                        Pedir Cotação
                      </button>
                      <button className="px-6 py-3 border border-slate-200 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider hover:border-slate-900 hover:text-slate-900 transition-colors flex items-center gap-2">
                        <Download size={14} /> PDF
                      </button>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                     <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">Especificações Técnicas</h3>
                     <ul className="space-y-4">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check size={16} className="text-trio-blue mt-1 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{detail}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};