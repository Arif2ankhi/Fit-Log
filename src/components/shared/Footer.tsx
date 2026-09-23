import Image from 'next/image';
import logo from '@/assets/logo.png'
import React from 'react';

const Footer = () => {
    return (
 <div className='container mx-auto'>
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <div className='flex justify-between gap-80'>
    
    <div className='flex gap-2 items-center'>
     
    <Image src={logo} alt="logo of the app"/>
    <span className='text-white  text-3xl font-bold mr-60'>FITLOG</span>
    </div>
    <div>
        
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Fit Log</p>
    </div>

 
  </div>
</footer>
 </div>
    );
};

export default Footer;