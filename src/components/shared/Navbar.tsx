'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import logo from '@/assets/logo.png';
import { WorkoutsContext } from '@/context/WorkoutsContext';

const Navbar = () => {
  const { addPlan = [], saveForLater = [] } = useContext(WorkoutsContext);

  const links = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/workouts">Workouts</Link></li>
      <li><Link href="/myplan">My Plan</Link></li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm border-b border-gray-800">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>

          <Link href="/" className="flex gap-2 items-center">
            <Image src={logo} alt="FITLOG Logo" width={32} height={32} />
            <span className="text-white text-2xl font-bold tracking-wider">FITLOG</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">{links}</ul>
        </div>

        <div className="navbar-end gap-4 text-sm font-semibold">
          <Link href="/myplan" className="flex items-center gap-1.5 hover:text-[#c2f800] transition-colors">
            <span>Plan</span>
            <span className="bg-[#c2f800] text-black font-extrabold rounded-full px-2 py-0.5 text-xs">
              {addPlan.length}
            </span>
          </Link>
          <Link href="/myplan" className="flex items-center gap-1.5 hover:text-[#c2f800] transition-colors">
            <span>Saved</span>
            <span className="bg-gray-800 text-white font-bold rounded-full px-2 py-0.5 text-xs border border-gray-700">
              {saveForLater.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;