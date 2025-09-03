import React from "react";

const Tollbar = () => {
    return (
        <div className="flex flex-wrap justify-between container pt-4 pb-2.5 border-b border-gold">

            <div className="flex flex-wrap mr-8 my-2">
                <div className="mr-7">
                    <img src="/images/dashboard.svg" alt="dashboard-logo" width="46" height="56" />
                </div>
                <div className="flex items-baseline">
                    <h1 className="text-2xl font-sans-semiBold lg:text-[44px] lg:leading-[54px] pr-4">Property Dashboard:</h1>
                    <div className="text-lg">Property Name | 0000 | 1234 Street Name, City Name, State, 12345</div>
                </div>

            </div>
            <div className="flex flex-wrap items-center my-2">
                <div className="mr-8">
                    <a href="/" className="text-gold !text-xs">View Subscription Plans</a>
                </div>
                <div className="mr-5">
                    <a href="/" className="btn-link btn-primary">Current Plan</a>
                </div>
                <div >
                    <a href="/" className="btn-link btn-primary">View My Properties</a>
                </div>

            </div>

        </div>
    )
}

export default Tollbar;