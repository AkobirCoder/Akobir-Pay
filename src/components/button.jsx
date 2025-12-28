import React from 'react';

const Button = ({styles}) => {
    return (
        <button 
            type='button' 
            className={`
                py-4 px-6 
                font-montserrat 
                font-medium 
                text-[18px] 
                rounded-xl 
                outline-none 
                ${styles} 
                bg-blue-gradient
            `}
        >
            Boshlash
        </button>
    );
}

export default Button;