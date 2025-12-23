import React from "react";

import { styles } from './util/style';

const App = () => {
    const {
        paddingX, 
        paddingY,
        container,
        flexCenter,
        flexStart
    } = styles;

    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${paddingX} ${paddingY} ${flexCenter}`}>
                <div className={`${container} ${flexStart}`}>
                    <p className="text-white">
                        Navbar
                    </p>
                </div>
            </div>

            <div className={`bg-slate-500 ${paddingX} ${paddingY}`}></div>
        </div>
    );
}

export default App; 