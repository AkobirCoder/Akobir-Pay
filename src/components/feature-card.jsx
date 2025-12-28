import React from 'react';
import { styles } from '../util/style';
import { services } from '../util/constants';

const FeatureCard = ({icon, title, content, index}) => {
    return (
        <div className={`
            flex flex-row items-center gap-2 
            rounded-[20px] cursor-pointer
            ${index === services.length - 1 ? 'mb-0 p-6' : 'mb-6 p-6'}
            transition-all duration-200 ease-in
            feature-card
        `}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-lightBlue`}>
                <img src={icon} alt={title} className={'w-[50%] h-[50%] object-contain'} />
            </div>

            <div className='flex-1 flex flex-col ml-3'>
                <h4 className='font-montserrat font-semibold capitalize text-white text-[18px] leading-[23px] mb-2'>
                    {title}
                </h4>
                <p className='font-montserrat font-normal text-lightWhite text-[16px] leading-[24px]'>
                    {content}
                </p>
            </div>
        </div>
    );
}

export default FeatureCard;