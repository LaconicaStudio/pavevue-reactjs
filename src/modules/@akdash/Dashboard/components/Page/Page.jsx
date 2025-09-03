import React from "react";
import Tollbar from "../Tollbar";
import {TabsWrapper} from "../../../UI";
import {useDashboardPage} from "./useDashboardPage";


const Page = () => {

    const {tabItems} = useDashboardPage();

    return (
        <div className="bg-grey w-full min-h-screen pb-7 px-6">
            <Tollbar />
            <div className="container !mt-10">
                <TabsWrapper items={tabItems} />
            </div>


        </div>
    )
}

export default Page;