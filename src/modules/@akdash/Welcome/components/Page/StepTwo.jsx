import React from "react";
import FirstPropertyForm from "../Form";

const StepTwo = () => {
    return (
         <div className="text-left max-w-[600px]">
             <div>
                 <h1 className="text-2xl mb-4 font-sans-semiBold lg:text-[44px] lg:leading-[54px] text-white lg:mb-10">
                     We only need a few details to setup your first property.
                 </h1>
             </div>
             <FirstPropertyForm />
         </div>
    )
}

export default StepTwo;