import React from 'react';
import { QuotesIcon } from '../assets';
import { styles } from '../util/style';
import { feedbacks } from '../util/constants';

const FeedbackCard = ({content, name, title, index}) => {
    return (
        <div className={`
            flex justify-between flex-col 
            cursor-pointer
            px-10 py-12
            rounded-[20px] 
            max-w-[370px] 
            my-5
            ${index === feedbacks.length - 1 ? 'mr-0' : 'md:mr-10 sm:mr-5 mr-0'}
            feedback-card
        `}>
            <>
                <img src={QuotesIcon} alt="QuotesIcon" className={'w-[42px] h-[27px] object-contain'} />
                <p className={'font-montserrat font-normal text-[18px] leading-[32px] text-white my-10'}>
                    {content}
                </p>
            </>

            <div className={'flex items-center flex-row'}>
                <div className={`
                    w-[50px] h-[50px] 
                    ${styles.flexCenter} 
                    bg-dark-gradient 
                    rounded-full
                `}>
                    <p className={'text-[22px] font-montserrat font-semibold text-gradient'}>
                        {
                            name.split(' ').map((item) => {
                                return item[0]
                            }).join('').toUpperCase()
                        }
                    </p>
                </div>
                <div className={'flex flex-col ml-4'}>
                    <h4 className={'font-montserrat font-semibold text-[20px] leading-[32px] text-white'}>
                        {name}
                    </h4>
                    <p className={'font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite'}>
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FeedbackCard;