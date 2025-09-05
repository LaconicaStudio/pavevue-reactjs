import React from "react";
import Table from "./Table/index.js";



const PaserRatings = () => {

    // const {tabItems} = useMyProperties();


    return (
        <div className="w-full  h-full">
            <div className="p-[26px] border-b border-gold text-dark-gold font-sans-bold text-2xl">
                <p>List</p>
            </div>
            <div className="w-full max-w-[1532px] mx-auto px-[26px] mt-16 pb-24">
                <div>
                    <Table/>
                </div>
            </div>


        </div>
    )
}

export default PaserRatings;