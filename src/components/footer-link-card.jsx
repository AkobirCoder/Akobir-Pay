import React from 'react';

const FooterLinkCard = ({title, links, index}) => {
    return (
        <div className={'flex flex-col ss:my-0 my-4 min-w-[150px]'}>
            <h4 className={'font-montserrat font-medium text-[18px] leading-[27px] text-white capitalize'}>
                {title}
            </h4>
            <ul className={'list-none mt-4'}>
                {
                    links.map((item, index) => {
                        return (
                            <li 
                                key={item.name} 
                                className={`
                                    font-montserrat font-normal 
                                    text-[16px] text-lightWhite
                                    leading-[24px]
                                    hover:text-secondary
                                    cursor-pointer
                                    ${index === links.length - 1 ? 'mb-0' : 'mb-4'}
                                `}
                            >
                                <a href={item.link}>
                                    {item.name}
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default FooterLinkCard;