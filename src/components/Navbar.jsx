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
        <div className={`w-full sm:py-6 py-4 ${styles.flexBetween} navbar`}>
            {/* Logo: */}
            <img src={Logo} alt="Logo" className='sm:w-[150px] sm:h-[45px] w-[120px] h-[40px] cursor-pointer' />

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
                <div 
                    className={
                        `${!toggleNav ? 'hidden' : 'flex'} 
                        w-full p-6 absolute top-[72px] right-0 bg-black 
                        sidebar bg-gradient`
                    }
                >
                    <ul className='list-none sm:hidden flex justify-center items-start flex-1'>
                        {
                            navigationLinks.map((nav, index) => {
                                return (
                                    <li
                                        key={nav.id}
                                        className={'font-montserrat font-normal cursor-pointer sm:text-[16px] text-[12px] text-white'}
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