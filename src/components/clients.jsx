import React from 'react';
import { styles } from '../util/style';
import { clients } from '../util/constants';
import ClientCard from './client-card';

const Clients = () => {
    return (
        <div id='clients' className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {
                    clients.map((client, index) => {
                        return (
                            <ClientCard key={client.id} logo={client.logo} index={index} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Clients;