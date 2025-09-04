import React from "react";

const Tollbar = (props) => {
    const {logo, title, buttons} = props;
    return (
        <div className="flex flex-wrap justify-between container pt-4 pb-2.5 border-b border-gold">

            <div className="flex flex-wrap mr-8 my-2 items-baseline items-center">
                <div className="mr-7">
                    {logo ?? <img src="/images/dashboard.svg" alt="dashboard-logo" width="46" height="56" />}

                </div>
                <div className="flex items-baseline flex-wrap">
                    {title}
                    {/*<h1 className="text-2xl font-sans-semiBold lg:text-[44px] lg:leading-[54px] pr-4">My Properties:</h1>*/}
                    {/*<div className="text-lg">60 Locations</div>*/}
                </div>

            </div>
            <div className="flex flex-wrap items-center my-2 w-full sm:w-auto">
                {buttons}

            </div>
        </div>
    )
}

export default Tollbar;