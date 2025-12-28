import React from 'react';
import { layout, styles } from '../util/style';
import Button from './button';
import { services } from '../util/constants';
import { FeatureCard } from '.';

const Business = () => {
    return (
        <section id='services' className={`${layout.section}`}>
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.headingTwo}`}>
                    Biznesingizni rivojlantiring, <br className='sm:block hidden' /> pulni hal qilamiz
                </h2>
                <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sit voluptatibus, 
                    reprehenderit laboriosam maxime ut corrupti asperiores totam deleniti nulla?
                </p>
                <Button styles={'mt-10'} />
            </div>
            <div className={`${layout.sectionImage} flex-col xs:mt-0 mt-10`}>
                {
                    services.map((service, index) => {
                        return (
                            <FeatureCard key={service.id} {...service} index={index} />
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Business;