import React from 'react';
import { styles } from '../util/style';
import { feedbacks } from '../util/constants';
import FeedbackCard from './feedback-card';

const Testimonials = () => {
    return (
        <div className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className={'absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue-gradient bottom-40'} />

            <div 
                className={`
                    w-full 
                    ${styles.flexBetween} 
                    md:flex-row flex-col 
                    sm:mb-16 mb-6 
                    relative 
                    z-[1]
                `}
            >
                <h2 className={`${styles.headingTwo}`}>
                    Odamlar biz haqimizda qanday fikrda?
                </h2>
                <div className={'w-full md:mt-0 mt-6'}>
                    <p className={`${styles.paragraph} text-left max-w-[550px]`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse quos commodi vero quod maxime tenetur totam saepe! Earum, deserunt soluta!
                    </p>
                </div>
            </div>

            <div className={'flex flex-wrap sm:justify-start justify-center w-full relative z-[1]'}>
                {
                    feedbacks.map((feedback, index) => {
                        return (
                            <FeedbackCard key={feedback.id} {...feedback} index={index} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Testimonials;