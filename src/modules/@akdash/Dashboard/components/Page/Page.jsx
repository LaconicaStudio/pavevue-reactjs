import React from "react";
import {TabsWrapper, Tollbar} from "../../../UI";
import {useDashboardPage} from "./useDashboardPage";


const Page = () => {

    const {tabItems, property} = useDashboardPage();

    const tollbarTitle = (
        <>
            <h1 className="text-2xl font-sans-semiBold lg:text-[44px] lg:leading-[54px] pr-4">Property Dashboard:</h1>
            <div className="text-lg">
                {property.name} | {property.number} | {property.address}
            </div>
        </>
    );

    const tollbarButtons = (
        <>
            <div className="my-2 md:my-0 w-full sm:w-auto text-center sm:mr-8">
                <a href="/" className="text-gold !text-xs">View Subscription Plans</a>
            </div>
            <div className="my-2 md:my-0 w-full sm:w-auto text-center sm:mr-5">
                <a href="/" className="btn-link btn-primary w-full sm:w-auto">Current Plan</a>
            </div>
            <div className="my-2 md:my-0 w-full sm:w-auto text-center sm:mr-5">
                <a href="/" className="btn-link btn-primary w-full sm:w-auto">View My Properties</a>
            </div>
        </>
    )

    return (
        <div className="bg-grey w-full min-h-screen pb-7 px-6">
            <Tollbar title={tollbarTitle} buttons = {tollbarButtons} />
            <div className="container !mt-10">
                <TabsWrapper items={tabItems} />
            </div>


        </div>
    )
}

export default Page;