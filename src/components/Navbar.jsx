import React from 'react';

import { styles } from '../util/style';
import { navigationLinks } from '../util/constants';
import {Logo, MenuIcon} from '../assets/index';

const Navbar = () => {
    return (
        <div className={`w-full py-6 ${styles.flexBetween} navbar`}>
            {/* Logo: */}
            <img src={Logo} alt="Logo" className='w-[150px] h-[45px] cursor-pointer' />

            {/* Navigation links: */}
            <ul className='w-[50%] list-none sm:flex hidden flex-1 justify-end items-center'>
                {
                    navigationLinks.map((nav, index) => {
                        return (
                            <li 
                                key={nav.id} 
                                className={`
                                    font-montserrat 
                                    font-normal 
                                    cursor-pointer 
                                    text-[16px]
                                    text-white 
                                    ${index === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'}
                                    hover:text-lightWhite transition-all duration-300
                                `}
                            >
                                {nav.title}
                            </li>
                        );
                    })
                }
            </ul>

            {/* Navigation btn */}
            <div className={'sm:hidden flex flex-1 justify-end items-center'}>
                <img src={MenuIcon} alt="Menu icon" className='w-[35px] h-[35px]' />
            </div>
        </div>
    );
}

export default Navbar;