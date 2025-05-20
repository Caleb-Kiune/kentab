'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Partner {
  name: string;
  logo: string;
}

interface PartnersMarqueeProps {
  partners: Partner[];
}

export function PartnersMarquee({ partners }: PartnersMarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-4">
        {[...partners, ...partners].map((partner, index) => (
          <motion.div
            key={`${partner.name}-${index}`}
            className="flex items-center justify-center mx-8"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-32 h-16 transition-all duration-300">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
} 