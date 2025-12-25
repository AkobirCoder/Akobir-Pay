import React, { useState } from 'react';

import { styles } from '../util/style';
import { navigationLinks } from '../util/constants';
import {Logo, MenuIcon, CloseIcon} from '../assets/index';

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);

    const toggleNavHandler = () => {
        setToggleNav((prevState) => {
            return !prevState;
        })
    }

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

            {/* Navigation button */}
            <div className={'sm:hidden flex flex-1 justify-end items-center'}>
                <img 
                    src={
                        toggleNav ? CloseIcon : MenuIcon
                    } 
                    alt="Menu icon" 
                    className='w-[30px] h-[30px] object-contain cursor-pointer'
                    onClick={toggleNavHandler}
                />

                {/* Navigation links for mobile */}
                <div className={`${!toggleNav ? 'hidden' : 'flex'} w-[50%] h-[100px] p-6 absolute top-[93px] right-0 left-[50%] bg-black sidebar `}>

                </div>
            </div>
        </div>
    );
}

export default Navbar;