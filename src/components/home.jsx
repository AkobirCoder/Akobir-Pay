import React from 'react';

import { styles } from '../util/style';
import { DiscountIcon } from '../assets';

const Home = () => {
    return (
        <section id='home' className={`md:flex-row flex flex-col ${styles.paddingY}`}>
            {/* --- Home section information --- */}
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                    {/* --- Home section discount information --- */}
                        <div 
                            className={'flex flex-row items-center justify-center gap-1 py-[6px] px-4 rounded-[10px] mb-2 bg-lightWhite bg-discount-gradient'}>
                            <img src={DiscountIcon} alt="Discount icon" className={'w-[30px] h-[30px]'} />
                            <p className={`${styles.paragraph}`}>
                                <span className={'text-white'}>20%</span> chegirma <span className={'text-white'}>1 oylik</span> hisob uchun
                            </p>
                        </div>
                    {/* --- Home section discount information --- */}

                    {/* --- Home section title --- */}
                        <div className=''></div>
                    {/* --- Home section title --- */}

                    {/* --- Home section description --- */}
                        <div className=''></div>
                    {/* --- Home section description --- */}

                </div>
            {/* --- Home section information --- */}

            {/* --- Home section animation image --- */}
                <div className=''></div>
            {/* --- Home section animation image --- */}
        </section>
    );
}

export default Home;