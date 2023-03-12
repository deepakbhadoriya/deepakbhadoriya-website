import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { navLinks } from '../constants';
import Image from 'next/image';
import { logo, menu, close } from '@/assets';
import { styles } from '@/styles/styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-2 fixed top-0 z-20 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <Image src={logo} alt='logo' className='h-20 w-40 object-contain' />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/deepakbhadoriya',
                '_blank'
              )
            }>
            <i className='fab fa-linkedin fa-lg ' />
          </li>
          <li
            className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() =>
              window.open('https://github.com/deepakbhadoriya', '_blank')
            }>
            <i className='fab fa-github fa-lg ' />
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex flex-col'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className='w-100% mt-5 flex'>
              <div
                className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/deepakbhadoriya',
                    '_blank'
                  )
                }>
                <i className='fab fa-linkedin fa-lg mr-4 ' />
              </div>
              <div
                className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() =>
                  window.open('https://github.com/deepakbhadoriya', '_blank')
                }>
                <i className='fab fa-github fa-lg ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
