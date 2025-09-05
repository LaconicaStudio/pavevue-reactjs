import React from "react";

const ReportItem = ({item, setActiveId, isActive}) => {

    return (
        <li key={item.id}>
            <button
                type={"button"}
                onClick={() => setActiveId(item.id)}
                className={`w-full text-left px-6 pt-[18px] pb-7 rounded-[15px] border flex items-center transition-all duration-300 ${isActive ? "bg-[#F8F4E9] border-[#707070]" : "bg-grey border-[#707070] hover:bg-[#F8F4E9]"}`}
            >
                <div className="mr-3.5">
                    <span className={`inline-block w-[18px] h-[18px] ${isActive ? "" : "border border-[#707070] rounded-full"}`}>
                        {isActive &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                          <g id="Group_1489" data-name="Group 1489" transform="translate(-216.192 -645.351)">
                            <circle id="Ellipse_270" data-name="Ellipse 270" cx="8.808" cy="8.808" r="8.808" transform="translate(216.192 645.351)" fill="#41ad6b"/>
                            <path id="Path_1757" data-name="Path 1757" d="M10.728,0,3.971,6.756.79,3.575,0,4.366,3.971,8.337l.395-.4L11.518.79Z" transform="translate(219.241 649.991)" fill="#fff"/>
                          </g>
                        </svg>
                        }
                    </span>
                </div>
                <div className="w-[80px] mr-7">
                    <img
                        src="/images/property/PDF.png"
                        alt='pdf logo'
                        width={81}
                        height={93}
                        className=""
                    />
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