import React from "react";

import { styles } from './util/style';
import {Home, Navbar} from './components/index';

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter} border-b-2 border-b-slate-700`}>
                <div className={`${styles.container}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.container}`}>
                    <Home />
                </div>
            </div>
        </div>
    );
}

export default App; 