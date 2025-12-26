import React, { useState } from 'react';

import { styles } from '../util/style';
import { navigationLinks } from '../util/constants';
import {Logo, MenuIcon, CloseIcon} from '../assets/index';

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);

    const toggleNavHandler = () => {
        setToggleNav((prevState) => {
            return !prevState;
        });
    }

    return (
        <div className={`w-full sm:py-6 py-4 ${styles.flexBetween} navbar`}>
            {/* Logo: */}
            <img src={Logo} alt="Logo" className='sm:w-[150px] sm:h-[45px] w-[120px] h-[35px] cursor-pointer' />

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
                    className='w-[25px] h-[25px] object-contain cursor-pointer'
                    onClick={toggleNavHandler}
                />

                {/* Navigation links for mobile */}
                <div 
                    className={
                        `${!toggleNav ? 'hidden' : 'flex'} 
                        w-full px-2 absolute top-[67px] right-0
                        sidebar bg-gradient`
                    }
                >
                    <ul className='list-none flex gap-1 justify-center items-start flex-1'>
                        {
                            navigationLinks.map((nav, index) => {
                                return (
                                    <li
                                        key={nav.id}
                                        className={`
                                            font-montserrat 
                                            font-normal 
                                            px-2
                                            py-4
                                            cursor-pointer 
                                            text-[12px] 
                                            text-white
                                            border-b-2
                                            border-transparent
                                            hover:text-lightWhite
                                            hover:border-b-green-500
                                            transition-all
                                            duration-300
                                            `}
                                    >
                                        {nav.title}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;