import React from "react";

import {Link} from "react-router-dom";
import SignInForm from "../Form";


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
                        <h1 className="text-2xl mb-4 font-sans-semiBold lg:text-[44px] lg:leading-[54px] text-white lg:mb-7">Let’s sign you in!</h1>
                        <SignInForm/>
                    </div>
                    <div className="pt-9">
                        <h2 className="text-gold font-sans-semiBold text-lg lg:text-[34px] lg:leading-[54px] mb-1.5">
                            Don’t have an account?
                        </h2>
                        <p className="text-white font-sans-semiBold text-base lg:text-[21px] lg:leading-7  mb-2.5">
                            Get started today and take the first step toward smarter maintenance, fewer surprises, and more money in your pocket.
                        </p>
                        <Link to="/signup">Create My Account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;