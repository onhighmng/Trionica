
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Activity, Microscope, Droplets, Sprout, Pickaxe, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ServiceSection } from '../types';

const ServiceIcon = ({ id, className }: { id: string, className?: string }) => {
  const props = { className: className || "w-6 h-6", strokeWidth: 1.5 };
  switch (id) {
    case 'ensino': return <Microscope {...props} />;
    case 'saude': return <Activity {...props} />;
    case 'aguas': return <Droplets {...props} />;
    case 'ambiente': return <Sprout {...props} />;
    case 'minas': return <Pickaxe {...props} />;
    default: return <Activity {...props} />;
  }
};

const ServiceStackCard: React.FC<{ service: ServiceSection, index: number, total: number }> = ({ service, index, total }) => {
  return (
    <div className="sticky top-24 mb-10">
      <div 
        className="relative bg-white rounded-t-[2rem] border border-slate-200 shadow-xl overflow-hidden"
        style={{ 
            height: '500px', 
            top: `calc(100px + ${index * 40}px)`,
            zIndex: index 
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Content Side */}
            <div className="p-10 lg:p-16 flex flex-col justify-between h-full bg-white relative z-10">
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">0{index + 1} / 0{total}</span>
                        <div className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-slate-100 text-slate-900`}>
                            {service.id}
                        </div>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                        {service.title}
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                        {service.shortDescription}
                    </p>
                </div>
                
                <div className="flex items-center gap-6 pt-8 border-t border-slate-100">
                    <Link to={`/servicos#${service.id}`} className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-trio-blue transition-colors">
                        Ver Especificações 
                        <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-trio-blue group-hover:text-white transition-all">
                            <ArrowRight size={14} />
                        </span>
                    </Link>
                </div>
            </div>

            {/* Image Side */}
            <div className="relative h-full overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10" />
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="w-full bg-slate-50 selection:bg-slate-900 selection:text-white">
      
      {/* --- HERO SECTION: Stark, Architectural, High Contrast --- */}
      <section className="relative min-h-screen flex flex-col pt-32 px-6 lg:px-12 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto w-full flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            
            {/* Grid Lines for Engineering feel */}
            <div className="absolute inset-0 pointer-events-none grid grid-cols-4 lg:grid-cols-12 gap-6 opacity-20">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="h-full border-r border-slate-300 hidden lg:block" />
                ))}
            </div>

            {/* Typography Content */}
            <div className="lg:col-span-8 relative z-10 flex flex-col justify-center pb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className="w-3 h-3 bg-trio-green rounded-full animate-pulse"></span>
                        <span className="font-mono text-xs font-medium text-slate-500 uppercase tracking-[0.2em]">Maputo, Moçambique</span>
                    </div>

                    <h1 className="text-7xl lg:text-[7rem] leading-[0.9] font-display font-bold text-slate-900 tracking-tighter mb-12">
                        PRECISÃO <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500">CIENTÍFICA.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-light border-l-2 border-trio-blue pl-8">
                        Infraestrutura laboratorial de ponta para os sectores críticos da economia nacional.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-16 flex flex-wrap gap-8"
                >
                     <Link to="/servicos" className="px-10 py-5 bg-slate-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-trio-blue transition-colors">
                        Explorar Soluções
                     </Link>
                     <Link to="/contactos" className="px-10 py-5 border border-slate-200 text-slate-900 text-sm font-bold uppercase tracking-widest hover:border-slate-900 transition-colors">
                        Falar com Especialista
                     </Link>
                </motion.div>
            </div>

            {/* Hero Image / Technical Drawing */}
            <div className="lg:col-span-4 relative z-10 hidden lg:flex items-end pb-20">
                 <motion.div style={{ y }} className="relative w-full aspect-[3/4]">
                    <div className="absolute top-0 right-0 p-4 bg-white border border-slate-200 z-20 shadow-lg max-w-[150px]">
                        <p className="font-mono text-[10px] text-slate-400 uppercase mb-1">Status</p>
                        <p className="font-bold text-sm text-trio-blue">Certificado ISO 9001</p>
                    </div>
                    <img 
                        src="https://images.unsplash.com/photo-1581093458791-9f3039cf5a3c?q=80&w=800&auto=format&fit=crop" 
                        alt="Lab Equipment" 
                        className="w-full h-full object-cover grayscale contrast-125"
                    />
                 </motion.div>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-0 w-full border-t border-slate-200 py-6 px-6 lg:px-12 flex justify-between items-center bg-white/80 backdrop-blur-sm z-20">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">Scroll para navegar</span>
            <ArrowDown size={16} className="text-slate-400 animate-bounce" />
        </div>
      </section>


      {/* --- INTRO STATEMENT: Large Typography --- */}
      <section className="py-32 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-3">
                    <span className="block w-full h-[1px] bg-slate-300 mb-6"></span>
                    <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-slate-500">Sobre a Triónica</h2>
                </div>
                <div className="lg:col-span-9">
                    <p className="text-3xl md:text-5xl font-display font-semibold text-slate-900 leading-tight">
                        "Proporcionar aos nossos clientes produtos e serviços de alta qualidade com métodos e tecnologias mais recentes."
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
                        {[
                            { label: "Anos de Experiência", value: "09+" },
                            { label: "Técnicos Qualificados", value: "100%" },
                            { label: "Cobertura Nacional", value: "MZ" },
                            { label: "Suporte Técnico", value: "24/7" }
                        ].map((stat, i) => (
                            <div key={i} className="border-l border-slate-300 pl-6">
                                <p className="text-4xl font-display font-bold text-slate-900 mb-2">{stat.value}</p>
                                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- STACKING CARDS SERVICES SECTION --- */}
      <section className="py-32 px-6 lg:px-12 bg-slate-100" id="solucoes">
         <div className="max-w-[1100px] mx-auto">
            <div className="mb-24 text-center">
                <h2 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-slate-500 mb-6">Nossas Áreas</h2>
                <p className="text-4xl md:text-6xl font-display font-bold text-slate-900">Soluções Integradas</p>
            </div>

            <div className="relative">
                {SERVICES.map((service, index) => (
                    <ServiceStackCard 
                        key={service.id} 
                        service={service} 
                        index={index} 
                        total={SERVICES.length} 
                    />
                ))}
            </div>
            
            <div className="h-20"></div> {/* Spacer for bottom of stack */}
         </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="bg-slate-900 py-32 px-6 lg:px-12 text-white relative overflow-hidden">
        {/* Background Technical Drawing Effect */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
                 backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", 
                 backgroundSize: "40px 40px" 
             }}>
        </div>

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10 items-center">
            <div>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
                    Pronto para <br/>
                    Inovar?
                </h2>
                <p className="text-slate-400 text-xl max-w-md leading-relaxed mb-12">
                    Junte-se à liderança científica em Moçambique. Solicite uma consultoria técnica hoje mesmo.
                </p>
                <div className="flex flex-wrap gap-6">
                     <Link to="/contactos" className="px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-widest hover:bg-trio-blue hover:text-white transition-colors">
                        Iniciar Projecto
                     </Link>
                     <a href="tel:+258846974444" className="px-8 py-4 border border-slate-700 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
                        Ligar Agora
                     </a>
                </div>
            </div>
            <div className="relative h-[400px] bg-slate-800 rounded-lg overflow-hidden border border-slate-700 group">
                <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" 
                    alt="CTA Lab" 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-700 grayscale"
                />
                <div className="absolute bottom-8 left-8">
                    <p className="font-mono text-xs text-trio-blue uppercase tracking-widest mb-2">Suporte Técnico</p>
                    <p className="text-2xl font-bold">+258 846 974 444</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
