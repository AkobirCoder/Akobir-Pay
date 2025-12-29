import React from 'react';
import { layout, styles } from '../util/style';
import { CardImage } from '../assets';
import Button from './button';

const Contract = () => {
    return (
        <section id='products' className={`${layout.section}`}>
            <div className={`${layout.sectionInfo} relative`}>
                <h2 className={`${styles.headingTwo}`}>
                    Bir necha oson qadamda <br className='sm:block hidden' /> oson kontrakt tuzing
                </h2>
                <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laboriosam recusandae cupiditate tempore velit facilis, 
                    optio quo repudiandae eos necessitatibus quidem!
                </p>
                <Button styles={'mt-10'} />
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink-gradient' />
                <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white-gradient' />
                <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue-gradient' />
            </div>
            <div className={`${layout.sectionImage}`}>
                <img src={CardImage} alt="CardImage" className='w-[100%] h-[100%] z-10' />
            </div>
        </section>
    );
}

export default Contract;