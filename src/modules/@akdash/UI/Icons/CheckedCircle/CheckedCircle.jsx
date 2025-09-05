import React from 'react';

const CheckedCircle = ({ size = 18, className, fillBg="#41ad6b", fillArrow="#ffffff"  }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 18 18"
            className={className}
        >
            <g id="Group_1489" data-name="Group 1489" transform="translate(-216.192 -645.351)">
                <circle id="Ellipse_270" data-name="Ellipse 270" cx="8.808" cy="8.808" r="8.808" transform="translate(216.192 645.351)" fill={fillBg}/>
                <path id="Path_1757" data-name="Path 1757" d="M10.728,0,3.971,6.756.79,3.575,0,4.366,3.971,8.337l.395-.4L11.518.79Z" transform="translate(219.241 649.991)" fill={fillArrow}/>
            </g>
        </svg>
    )
};

export default CheckedCircle;
