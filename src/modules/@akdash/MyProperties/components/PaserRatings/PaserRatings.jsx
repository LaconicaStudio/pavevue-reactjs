import React from "react";
import Table from "./Table/index.js";



const PaserRatings = () => {

    // const {tabItems} = useMyProperties();


    return (
        <div className="w-full  h-full">
            <div className="p-[26px] border-b border-gold text-dark-gold font-sans-bold text-2xl">
                <p>How PASER Ratings Work</p>
            </div>
            <div className="w-full max-w-[1532px] mx-auto px-[26px] mt-16 pb-24">
                <div className="max-w-[990px] mb-[78px] md:pl-7">
                    <h2 className="text-[44px] leading-[52px] font-sans-bold mb-4">
                        Evaluate your asphalt easily with the PASER Scale
                    </h2>
                    <p className="text-[28px] leading-[38px]">
                        Pavement experts will rate the condition on the industry-standard PASER Scale, giving you an objective measurement of the condition of your pavement assets.
                    </p>
                </div>
                <div>
                    <Table/>
                </div>
            </div>


        </div>
    )
}

export default PaserRatings;