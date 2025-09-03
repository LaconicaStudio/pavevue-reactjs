import React from "react";
import {TabsWrapper, Tollbar} from "../../../UI";
import {useMyProperties} from "./useMyProperties.js";


const Page = () => {

    const {tabItems} = useMyProperties();

    const tollbarTitle = (
        <>
            <h1 className="text-2xl font-sans-semiBold lg:text-[44px] lg:leading-[54px] pr-4">
                My Properties:
            </h1>
            <div className="text-2xl lg:text-[44px] lg:leading-[54px]">60 Locations</div>
        </>
    );

    const tollbarButtons = (
        <>
            <div className="my-2 md:my-0 w-full sm:w-auto text-center sm:mr-5">
                <a href="/" className="btn-link btn-primary w-full sm:w-auto">Add New Property</a>
            </div>
        </>
    )


    return (
        <div className="bg-grey w-full min-h-screen pb-7 px-6">
            <Tollbar title={tollbarTitle} buttons={tollbarButtons} />

            <div className="container !mt-10">
                <TabsWrapper items={tabItems} />
            </div>


        </div>
    )
}

export default Page;