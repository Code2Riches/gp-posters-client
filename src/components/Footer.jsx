import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='w-full bg-zinc-900 text-gray-300 py-2 px-2 absolute'>
      <div className=' max-w-[1240] mx-auto grid grid-cols-2 md:grid-cols-3 text-center border-b-2 border-gray-600 py-2'>
        <div className=''>
          <h6 className=' font-bold uppercase'>
            Collaborators
          </h6>
          <ul>
            <li className='py-0 hover:text-red-800'>Red Bull Racing</li>
            <li className='py-0 hover:text-red-800'>Scuderia Ferrari F1 Racing</li>
            <li className='py-0 hover:text-red-800'>AMG Petronas F1 Mercedes</li>
            <li className='py-0 hover:text-red-800'>Aston Martin F1 Racing Team</li>
          </ul>
        </div>
        <div>
          <h6 className=' font-bold uppercase'>Become a Contributor</h6>
          <ul>
            <li className='py-0 hover:text-red-800'>Knowledge Experts</li>
            <li className='py-0 hover:text-red-800'>Mega-Fan</li>
            <li className='py-0 hover:text-red-800'>Brand Ambassadors</li>
            <li className='py-0 hover:text-red-800'>Sponsor</li>
          </ul>
        </div>
        <div>
          <h6 className=' font-bold uppercase '>Company</h6>
          <ul>
            <li className='py-0 hover:text-red-800'>
              <Link to='/about'>About</Link>
            </li>
            <li className='py-0 hover:text-red-800'>Join the Family</li>
          </ul>
        </div>
        
      </div>

      <div className=' flex flex-col max-w-[1240px] px-0 pt-0 mx-auto justify-between text-center text-gray-500 dark:text-white'>
        <p className='py-4'>2022 GP Posters</p>
        
      </div>
    </div>
  );
};

export default Footer;
