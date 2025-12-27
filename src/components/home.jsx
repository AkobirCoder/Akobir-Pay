import React from 'react';

import { styles } from '../util/style';
import { DiscountIcon, HomeRobotImage } from '../assets';

const Home = () => {
    return (
        <section id='home' className={`md:flex-row flex flex-col items-center ${styles.paddingY}`}>
            {/* --- Home section animation image --- */}
                <div className={`flex-1 ${styles.flexStart} md:my-0 my-10`}>
                    <img src={HomeRobotImage} alt="Home section Robot" className='w-[100%] h-[100%] relative z-10 rounded-2xl' />
                </div>
            {/* --- Home section animation image --- */}

            {/* --- Home section information --- */}
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}>
                    {/* --- Home section discount information --- */}
                        <div 
                            className={'flex flex-row items-center gap-1 py-[6px] px-4 rounded-[10px] mb-2 bg-lightWhite bg-discount-gradient'}
                        >
                            <img src={DiscountIcon} alt="Discount icon" className={'w-[30px] h-[30px]'} />
                            <p className={`${styles.paragraph} capitalize`}>
                                <span className={'text-white'}>20%</span> chegirma <span className={'text-white'}>1 oylik</span> hisob uchun
                            </p>
                        </div>
                    {/* --- Home section discount information --- */}

                    {/* --- Home section title --- */}
                        <div className='w-full'>
                            <h1 className={`${styles.headingOne} capitalize`}>
                                Yangi avlod <br /> <span className='text-gradient'>to'lov usuli</span>
                            </h1>
                        </div>
                    {/* --- Home section title --- */}

                    {/* --- Home section description --- */}
                        <div className={`${styles.paragraph} mt-5 max-w-[550px]`}>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet assumenda tempora sed voluptates nostrum facilis rem molestiae, natus molestias similique.
                            </p>
                        </div>
                    {/* --- Home section description --- */}

                    {/* --- Home section started button --- */}

                    {/* --- Home section gradient background --- */}
                        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink-gradient' />
                        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white-gradient' />
                        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue-gradient' />
                    {/* --- Home section gradient background --- */}
                </div>
            {/* --- Home section information --- */}
        </section>
    );
}

export default Home;