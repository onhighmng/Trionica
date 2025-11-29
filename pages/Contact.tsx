import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';
import { 
  COMPANY_ADDRESS, 
  COMPANY_EMAIL_GENERAL, 
  COMPANY_EMAIL_SUPPORT, 
  COMPANY_PHONE_1, 
  COMPANY_PHONE_2, 
  COMPANY_PHONE_TECH 
} from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        
        {/* Left Side - Dark Info Panel */}
        <div className="bg-slate-900 text-white p-12 lg:p-24 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-trio-blue/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8">
              Vamos <br />
              <span className="text-trio-blue">Conversar.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-md">
              A nossa equipa técnica está pronta para responder às suas questões e fornecer cotações detalhadas.
            </p>
          </div>

          <div className="space-y-12 relative z-10 mt-12">
            <div>
              <div className="flex items-center gap-4 text-trio-blue mb-2">
                <MapPin size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Localização</span>
              </div>
              <p className="text-xl font-light leading-relaxed max-w-sm pl-9">{COMPANY_ADDRESS}</p>
            </div>

            <div>
               <div className="flex items-center gap-4 text-trio-green mb-2">
                <Phone size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Contactos</span>
              </div>
              <div className="pl-9 space-y-2">
                <p className="text-xl">{COMPANY_PHONE_1}</p>
                <p className="text-xl">{COMPANY_PHONE_2}</p>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
               <p className="text-xs font-bold uppercase tracking-widest text-trio-red mb-2 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-trio-red animate-pulse"></span>
                 Suporte Técnico 24/7
               </p>
               <p className="text-2xl font-mono font-bold">{COMPANY_PHONE_TECH}</p>
            </div>
          </div>
        </div>

        {/* Right Side - Light Form Panel */}
        <div className="bg-white p-12 lg:p-24 flex items-center">
          <div className="w-full max-w-lg mx-auto">
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Nome</label>
                  <input type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 text-slate-900 focus:outline-none focus:border-trio-blue transition-colors rounded-t-lg" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Empresa</label>
                  <input type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 text-slate-900 focus:outline-none focus:border-trio-blue transition-colors rounded-t-lg" placeholder="Sua empresa" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</label>
                <input type="email" className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 text-slate-900 focus:outline-none focus:border-trio-blue transition-colors rounded-t-lg" placeholder="seu@email.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Departamento</label>
                <select className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 text-slate-900 focus:outline-none focus:border-trio-blue transition-colors rounded-t-lg">
                  <option>Comercial / Vendas</option>
                  <option>Assistência Técnica</option>
                  <option>Informações Gerais</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Mensagem</label>
                <textarea rows={4} className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 text-slate-900 focus:outline-none focus:border-trio-blue transition-colors rounded-t-lg" placeholder="Como podemos ajudar?"></textarea>
              </div>

              <button className="group w-full bg-slate-900 text-white py-5 rounded-xl font-bold tracking-widest uppercase text-xs hover:bg-trio-blue transition-all duration-300 hover:shadow-lg hover:shadow-trio-blue/30 flex items-center justify-center gap-2">
                <span>Enviar Mensagem</span> 
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};