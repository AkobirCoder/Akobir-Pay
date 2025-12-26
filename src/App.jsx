import React from "react";

import { styles } from './util/style';
import {Home, Navbar} from './components/index';

const App = () => {
    const {paddingX, container} = styles;

    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${paddingX}`}>
                <div className={`${container}`}>
                    <Navbar />
                    <Home />
                </div>
            </div>
        </div>
    );
}

export default App; 