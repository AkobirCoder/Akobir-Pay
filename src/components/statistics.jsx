import React from 'react';
import { styles } from '../util/style';
import { statistics } from '../util/constants';

const Statistics = () => {
    return (
        <div className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6`}>
            {
                statistics.map((stat) => {
                    return (
                        <div 
                            key={stat.id}
                            className={'flex-1 flex sm:justify-center justify-start items-center flex-row mt-3'}
                        >
                            <h4 className='font-montserrat font-semibold xs:text-[41px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
                                {stat.value}
                            </h4>
                            <p className='font-montserrat font-normal xs:text-[20px] text-[14px] xs:leading-[26px] leading-[22px] uppercase ml-3 text-gradient'>
                                {stat.title}
                            </p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Statistics;