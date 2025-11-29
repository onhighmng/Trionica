
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_PHONE_1 } from '../constants';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink: React.FC<{ to: string; children: React.ReactNode; active: boolean }> = ({ to, children, active }) => (
  <Link 
    to={to} 
    className={`relative text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${active ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
  >
    {children}
    {active && (
      <motion.span 
        layoutId="nav-underline"
        className="absolute -bottom-2 left-0 w-full h-[2px] bg-trio-blue"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
  </Link>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md border-slate-200 py-4' : 'bg-white border-transparent py-6'}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          <Link to="/" className="flex-shrink-0 z-50">
            <Logo />
          </Link>

          {/* Desktop Nav - Clean & Minimal */}
          <nav className="hidden md:flex items-center gap-12">
            <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/sobre" active={location.pathname === "/sobre"}>Empresa</NavLink>
            <NavLink to="/servicos" active={location.pathname === "/servicos"}>Soluções</NavLink>
            <NavLink to="/noticias" active={location.pathname === "/noticias"}>Notícias</NavLink>
            <NavLink to="/contactos" active={location.pathname === "/contactos"}>Contactos</NavLink>
          </nav>

          <div className="hidden lg:block">
            <a 
              href={`tel:${COMPANY_PHONE_1.replace(/[^0-9+]/g, '')}`} 
              className="px-6 py-2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-trio-blue transition-colors"
            >
              Suporte 24/7
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-900 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {[
                { path: "/", label: "Home" },
                { path: "/sobre", label: "A Empresa" },
                { path: "/servicos", label: "Soluções" },
                { path: "/noticias", label: "Notícias" },
                { path: "/contactos", label: "Contactos" }
              ].map((item, idx) => (
                <Link 
                  key={idx}
                  to={item.path} 
                  className="text-4xl font-display font-bold text-slate-900 flex items-center justify-between border-b border-slate-100 pb-4"
                >
                  {item.label}
                  <ArrowRight size={24} className="text-slate-300" />
                </Link>
              ))}
              
              <div className="mt-12">
                 <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Emergência Técnica</p>
                 <a href={`tel:${COMPANY_PHONE_1.replace(/[^0-9+]/g, '')}`} className="text-2xl font-mono font-bold text-trio-blue">
                  {COMPANY_PHONE_1}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
