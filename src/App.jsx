import React from "react";

import { styles } from './util/style';
import {Billing, Business, Clients, Contract, CTA, Home, Navbar, Statistics, Testimonials} from './components/index';

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">

            {/* --- Navbar section --- */}
                <div className={`${styles.paddingX} ${styles.flexStart} border-b-2 border-b-slate-700`}>
                    <div className={`${styles.container}`}>
                        <Navbar />
                    </div>
                </div>
            {/* --- Navbar section --- */}

            {/* --- Home section --- */}
                <div className={`bg-primary ${styles.flexCenter}`}>
                    <div className={`${styles.container}`}>
                        <Home />
                    </div>
                </div>
            {/* --- Home section --- */}

            {/* --- Statistics section --- */}
                <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.container}`}>
                        <Statistics />
                        <Contract />
                        <Billing />
                        <Business />
                        <Testimonials />
                        <Clients />
                        <CTA />
                    </div>
                </div>
            {/* --- Statistics section --- */}
            
        </div>
    );
}

export default App; 