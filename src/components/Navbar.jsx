import React from 'react';

import { styles } from '../util/style';

const Navbar = () => {
    return (
        <div className={`w-full py-6 ${styles.flexBetween} navbar`}>
            {/* Logo: */}
            <div className={`${styles.heading}`}>Logo</div>

            {/* Navigation links: */}
            <ul>
                <li></li>
            </ul>
        </div>
    );
}

export default Navbar;