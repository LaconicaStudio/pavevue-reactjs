import React from "react";
import SignInForm from "../../../SignIn/components/Form/index.js";
import {Link} from "react-router-dom";

const StepOne = props => {
    const {setIsStartSetup} = props;

    return (
                <div className="text-left max-w-[600px]">
                    <div>
                        <h1 className="text-2xl mb-4 font-sans-semiBold lg:text-[44px] lg:leading-[54px] text-white lg:mb-10">
                            Welcome to your smarter way to protect, maintain, and grow the value of your property.
                        </h1>
                        <p className="text-white text-xl font-sans-light">
                            You’re just a few clicks away from full control of your property’s exterior. Set up your first property to unlock real-time assessments, expert PASER ratings, a clear repair history, and instant access to trusted pros—so you can stay ahead of issues, cut costs, and keep everything looking sharp.
                        </p>
                     </div>
                    <div className="pt-7">
                        <h2 className="text-gold font-sans-semiBold text-lg lg:text-[34px] lg:leading-[54px] mb-1.5">
                            Let’s get started.
                        </h2>
                        <p className="text-white font-sans-semiBold text-base lg:text-[21px] lg:leading-7  mb-2.5">
                            Tell us about your first property, and we’ll take it from here.
                        </p>
                    </div>
                    <div className="mt-10">
                        <button type="button"
                                onClick={() => {setIsStartSetup(true)}}
                                className="bg-green text-2xl font-sans-bold text-white py-4 px-[55px] rounded-2xl hover:bg-dark-gold transition-all duration-300"
                        >
                            <span>Start Setup</span>
                        </button>
                    </div>
                </div>
    )
}

export default StepOne;