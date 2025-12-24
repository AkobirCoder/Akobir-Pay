import React from 'react';

import { styles } from '../util/style';
import { navigationLinks } from '../util/constants';
import { logo } from '../assets';

const Navbar = () => {
    return (
        <div className={`w-full py-6 ${styles.flexBetween} navbar`}>
            {/* Logo: */}
            {/* <div className={`${styles.heading}`}>Logo</div> */}
            <img src={logo} alt="Logo" className='w-[150px] h-[45px] cursor-pointer' />

            {/* Navigation links: */}
            <ul className='w-[50%] list-none sm:flex hidden justify-end items-center flex-2'>
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
                                `}
                            >
                                {nav.title}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Navbar;