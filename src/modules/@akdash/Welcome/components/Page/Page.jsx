import React, {useState} from "react";
import StepOne from "./StepOne.jsx";
import StepTwo from "./StepTwo.jsx";

const Welcome = () => {
    const [isStartSetup, setIsStartSetup] = useState(false);

    return (
        <div className="flex flex-col justify-center w-full p-5">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
                <img src="/images/bg-image.png" alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto">
                <div></div>
                {!isStartSetup
                    ? <StepOne setIsStartSetup={setIsStartSetup}/>
                    : <StepTwo/>
                }

            </div>
        </div>
    )
}

export default Welcome;