import React from "react";

import { styles } from '../../util/style';

const App = () => {
    const {
        paddingX, 
        paddingY,
        container,
        flexCenter,
        flexStart,
        paragraph,
        heading,
    } = styles;

    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${paddingX} ${paddingY} ${flexCenter}`}>
                <div className={`${container} ${flexStart}`}>
                    <div className={`${heading}`}>
                        Navbar
                    </div>
                </div>
            </div>

            <div className={`bg-slate-500 ${paddingX} ${paddingY} ${paragraph}`}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam at aspernatur nemo animi odit harum adipisci libero illum voluptatum eaque non perferendis molestiae assumenda, quod ratione reiciendis. Officiis reprehenderit deserunt nulla hic voluptate repellat quis, enim inventore ex amet itaque, optio quas eos! Id corporis eius atque vitae natus totam.</p>
            </div>
        </div>
    );
}

export default App; 