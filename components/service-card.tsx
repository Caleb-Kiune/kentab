'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ServiceModal } from './service-modal';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  coverage: string[];
}

export function ServiceCard({ title, description, icon, features, coverage }: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:border-primary-200 hover:shadow-xl"
      >
        <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary-100">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary-700 mb-2 transition-colors duration-300 group-hover:text-primary-600">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-300"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </motion.div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        icon={icon}
        features={features}
        coverage={coverage}
      />
    </>
  );
} 