import React from 'react';
// import {ThreeDots} from "react-loader-spinner";
import classes from './loader.module.css'

const Loader = props => {
    const {isActive, height, width, color} = props;

    return (
        <div>Loader</div>
    )

    // return (isActive &&
        // <div className={classes.loader}>
        //     <ThreeDots
        //         visible={true}
        //         height={height}
        //         width={width}
        //         color={color}
        //         radius="9"
        //         ariaLabel="three-dots-loading"
        //         wrapperStyle={{}}
        //         wrapperClass=""
        //     />
        // </div>
    // )
};

export default Loader;
