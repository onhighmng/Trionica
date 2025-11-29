import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Facebook } from 'lucide-react';
import { Logo } from './Logo';
import { 
  COMPANY_ADDRESS, 
  COMPANY_EMAIL_GENERAL, 
  COMPANY_PHONE_1, 
  COMPANY_PHONE_TECH 
} from '../constants';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
          
          <div className="space-y-8">
            <Logo />
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-light">
              Elevando a ciência e tecnologia em Moçambique com soluções de precisão e parcerias globais.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-trio-blue hover:border-trio-blue transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-trio-blue hover:border-trio-blue transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-8">Navegação</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><Link to="/sobre" className="hover:text-trio-blue hover:pl-2 transition-all">A Empresa</Link></li>
              <li><Link to="/servicos" className="hover:text-trio-blue hover:pl-2 transition-all">Soluções</Link></li>
              <li><Link to="/noticias" className="hover:text-trio-blue hover:pl-2 transition-all">Notícias</Link></li>
              <li><Link to="/contactos" className="hover:text-trio-blue hover:pl-2 transition-all">Contactos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-8">Contactos</h4>
            <ul className="space-y-6 text-sm text-slate-500">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-trio-blue" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="flex-shrink-0 text-trio-blue" />
                <a href={`mailto:${COMPANY_EMAIL_GENERAL}`} className="hover:text-slate-900">{COMPANY_EMAIL_GENERAL}</a>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="flex-shrink-0 text-trio-blue" />
                <a href={`tel:${COMPANY_PHONE_1.replace(/[^0-9+]/g, '')}`} className="hover:text-slate-900">{COMPANY_PHONE_1}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-8">Emergência</h4>
            <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-trio-red/20 rounded-full blur-xl group-hover:bg-trio-red/30 transition-colors"></div>
               <p className="text-xs text-slate-400 mb-2 uppercase tracking-wider relative z-10">Linha Técnica 24/7</p>
               <p className="text-xl font-mono font-bold text-white relative z-10">{COMPANY_PHONE_TECH}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-medium">
            &copy; {new Date().getFullYear()} Triónica Moçambique. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Termos</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};