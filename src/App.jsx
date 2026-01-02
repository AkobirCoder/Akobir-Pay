import React from "react";

import { styles } from './util/style';
import {Billing, Business, Clients, Contract, CTA, Footer, Home, Navbar, Statistics, Testimonials} from './components/index';

const App = () => {
    return (
        <div className="bg-primary w-full">

            {/* --- Navbar section --- */}
                <div className={`${styles.paddingX} ${styles.flexStart} sticky top-0 left-0 right-0 z-[100] backdrop-blur-[8px] border-b-2 border-b-slate-700`}>
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

            {/* --- Main section --- */}
                <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} overflow-hidden`}>
                    <div className={`${styles.container}`}>
                        <Statistics />
                        <Contract />
                        <Billing />
                        <Business />
                        <Testimonials />
                        <Clients />
                        <CTA />
                        <Footer />
                    </div>
                </div>
            {/* --- Main section --- */}
            
        </div>
    );
}

export default App; 