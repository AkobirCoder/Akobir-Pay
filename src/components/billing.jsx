import React from 'react';
import { layout, styles } from '../util/style';
import { AppStoreImage, BillingImage, GooglePlayImage } from '../assets';

const Billing = () => {
    return (
        <section id='services' className={`${layout.sectionReverse}`}>
            <div className={`${layout.sectionImageReverse}`}>
                <img src={BillingImage} alt="BillingImage" className='w-[100%] h-[100%] relative z-[5]' />

                <div className='absolute z-[3] -left-1/2 w-[50%] h-[50%] rounded-full top-0 white-gradient' />
                <div className='absolute z-[0] -left-1/2 w-[50%] h-[50%] bottom-0 pink-gradient' />
            </div>
            <div className={`${layout.sectionInfo} relative`}>
                <h2 className={`${styles.headingTwo}`}>
                    Hisob-kitob va fakturialni <br className='sm:block hidden' /> osongina boshqaring
                </h2>
                <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus incidunt voluptatum, 
                    perferendis tempora excepturi iure nulla illum voluptatem quibusdam consectetur ex error perspiciatis 
                    amet dolorum accusamus quidem hic nesciunt!
                </p>

                <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                    <img src={GooglePlayImage} alt="Goog lePlay" className='w-[130px] h-[42px] object-cover mr-5 cursor-pointer' />
                    <img src={AppStoreImage} alt="App Store" className='w-[130px] h-[42px] object-cover mr-5 cursor-pointer' />
                </div>
            </div>
        </section>
    );
}

export default Billing;