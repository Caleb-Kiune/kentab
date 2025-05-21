'use client';

import { Dialog, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Fragment } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  coverage: string[];
}

export function ServiceModal({
  isOpen,
  onClose,
  title,
  description,
  icon,
  features,
  coverage,
}: ServiceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as={Fragment}
          open={isOpen}
          onClose={onClose}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <Dialog.Title className="text-2xl font-semibold text-primary-700">
                      {title}
                    </Dialog.Title>
                    <p className="text-gray-600 mt-1">{description}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-6">
                <section>
                  <h3 className="text-lg font-semibold text-primary-700 mb-4">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2" />
                        <p className="text-gray-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-primary-700 mb-4">
                    Coverage Details
                  </h3>
                  <ul className="space-y-2">
                    {coverage.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2" />
                        <p className="text-gray-600">{item}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="mt-8 flex justify-end gap-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-primary-600 border border-primary-600 rounded-md hover:bg-primary-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
} 