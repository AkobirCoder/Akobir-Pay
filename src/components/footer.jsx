import React from 'react';
import { styles } from '../util/style';
import { Logo } from '../assets';
import { footerLinks, socialMedia } from '../util/constants';
import FooterLinkCard from './footer-link-card';

const Footer = () => {
    return (
        <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className={'flex flex-1 flex-col justify-start mr-10'}>
                    <img src={Logo} alt="Logo" className={'w-[250px] h-[72px] object-contain'} />
                    <p className={`${styles.paragraph} mt-4 max-w-[350px]`}>
                        To'lovlarni oson, ishonchli va xavfsiz qilishning yangi usuli.
                    </p>
                </div>

                <div className={'flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'}>
                    {
                        footerLinks.map((footerLink, index) => {
                            return (
                                <FooterLinkCard key={footerLink.title} {...footerLink} index={index} />
                            );
                        })
                    }
                </div>
            </div>

            <div className={`w-full ${styles.flexBetween} md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]`}>
                <p className={'font-montserrat font-normal text-center text-[18px] leading-[27px] text-white capitalize'}>
                    Copyright © 2025 AkobirPay. All right reserved
                </p>

                <div className={'flex flex-row md:mt-0 mt-6'}>
                    {
                        socialMedia.map((social, index) => {
                            return (
                                <a 
                                    href={social.link} 
                                    target='_blank' 
                                    rel='noreferrer'
                                    className={`${index === socialMedia.length - 1 ? 'mr-0' : 'mr-6'}`}
                                >
                                    <img 
                                        src={social.icon} 
                                        key={social.id} 
                                        alt={social.id} 
                                        className={`
                                            w-[20px] h-[20px] 
                                            object-contain 
                                            cursor-pointer
                                        `}
                                    />
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Footer;