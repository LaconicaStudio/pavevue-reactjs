import React from "react";

import {Link} from "react-router-dom";
import SignUpForm from "../Form";


const Page = () => {
    return (
        <div className="flex flex-col justify-center w-full p-5">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
                <img src="/images/bg-image.png" alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto">
                <div></div>
                <div className="text-left max-w-[600px]">
                    <div>
                        <h1 className="text-2xl mb-4 font-sans-semiBold lg:text-[44px] lg:leading-[54px] text-white lg:mb-7">Create Your Account</h1>
                        <SignUpForm/>
                    </div>
                    <div className="pt-9">
                        <Link to="/">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;