import React from "react";
import {CheckedCircle} from "../../../UI";

const ReportItem = ({item, setActiveId, isActive}) => {

    return (
        <li key={item.id}>
            <button
                type={"button"}
                onClick={() => setActiveId(item.id)}
                className={`w-full text-left px-6 pt-[18px] pb-7 rounded-[15px] border flex items-center transition-all duration-300 ${isActive ? "bg-[#F8F4E9] border-[#707070]" : "bg-grey border-[#707070] hover:bg-[#F8F4E9]"}`}
            >
                <div className="flex items-center flex-col justify-center mr-4 sm:flex-row sm:mr-0">
                    <div className="sm:mr-3.5 my-4">
                    <span className={`block w-[18px] h-[18px]  ${isActive ? "" : "border border-[#707070] rounded-full"}`}>
                        {isActive &&
                            <CheckedCircle />
                        }
                    </span>
                    </div>
                    <div className="w-[40px] md:w-[80px] lg:w-[50px] xl:w-[80px] sm:mr-7">
                        <img
                            src="/images/property/PDF.png"
                            alt='pdf logo'
                            width={81}
                            height={93}
                            className=""
                        />
                    </div>
                </div>
                <div className="min-w-0 flex-1">
                    <h2 className={`font-sans-bold text-xl mb-1.5  ${isActive ? "text-black" : "text-dark-grey"}`}>{item.title}</h2>
                    <div className={`text-xs mb-2.5 ${isActive ? "text-black" : "text-dark-grey"}`}>Creation Date: {item.createDate}</div>
                    <p className={`leading-5 ${isActive ? "text-black" : "text-dark-grey"}`}>{item.shortDescription}</p>
                </div>
            </button>
        </li>
    )
}

export default ReportItem;