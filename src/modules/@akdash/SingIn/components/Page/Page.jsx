import React from "react";
import Form from "../Form";

const Page = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
                <img src="/images/bg-image.png" alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div></div>
                <div className="text-left">
                    <div>
                        <h1 className="text-2xl mb-4 font-sans-bold lg:text-[44px] lg:leading-[54px] text-white">Let’s sign you in!</h1>
                        <Form/>
                    </div>
                    <div>
                        <h2>
                            Don’t have an account?
                        </h2>
                        <p>
                            Get started today and take the first step toward smarter maintenance, fewer surprises, and more money in your pocket.
                        </p>
                        <a href="">Create My Account</a>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Page;