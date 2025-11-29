import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceSection } from '../types';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: ServiceSection;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-trio-blue/20 group-hover:bg-trio-blue/10 transition-colors z-10" />
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-trio-blue transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {service.shortDescription}
        </p>
        <Link 
          to={`/servicos#${service.id}`} 
          className="inline-flex items-center text-trio-blue font-semibold mt-auto group-hover:gap-2 transition-all"
        >
          Saiba Mais <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};