import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto bg-gray-900 text-gray-400 py-6 px-4 sm:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
       
        <div className="flex items-center gap-2">
          <Image src={logo} alt="FITLOG Logo" width={32} height={32} />
         
          <span className="text-xl font-bold tracking-wider text-white">
            FITLOG
          </span>
        </div>

        <div className="text-sm text-center md:text-right">
        © {new Date().getFullYear()} FITLOG. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;