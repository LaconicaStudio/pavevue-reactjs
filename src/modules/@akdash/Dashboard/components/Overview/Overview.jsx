import React from "react";

import {useOverview} from "./useOverview.js";


const Overview = () => {

    const {property} = useOverview();



    return (
        <div className="bg-grey w-full min-h-screen pb-7 px-6">
            <div>
                <div>

                </div>
                <div></div>
            </div>

        </div>
    )
}

export default Overview;