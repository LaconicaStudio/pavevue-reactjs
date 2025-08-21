import React from 'react';
import {BeatLoader} from "react-spinners";

const Loader = props => {
    const {isActive, color} = props;

    return (isActive &&
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#00000070]">
                <BeatLoader color={color} loading={isActive} />
            </div>

    )
};

export default Loader;
