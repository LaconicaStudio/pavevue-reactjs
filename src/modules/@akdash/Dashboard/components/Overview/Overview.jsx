import React from "react";

import {useOverview} from "./useOverview.js";
import {StatusIcon} from "./StatusIcon";


const Overview = () => {

    const {property} = useOverview();

    return (
        <div className="w-full">
            <div className="flex">
                <div className="w-full lg:w-1/2 lg:pr-[30px]">
                    <div>
                        <img src={property.src} alt={property.name} width={832} height={467} />
                    </div>
                    <div className="text-right">
                        <a href="/" className="!text-base">Edit</a>
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-3">
                        <div>
                            <h3 className="">{property.name}</h3>
                            <p>
                                Property Reference #: {property.contacts.property.number}
                            </p>
                            <p>
                                {property.contacts.property.address}
                            </p>
                            <p>
                                Unit # {property.contacts.property.unit}
                            </p>
                        </div>
                        <div>
                            <h3 className="">Property Manager</h3>
                            <p>
                                {property.contacts.manager.name}
                            </p>
                            <p>
                                T. <a className="!text-base !text-black !no-underline !font-sans"
                                      href={`tel:${property.contacts.manager.tel}`}>{property.contacts.manager.tel}</a>
                            </p>
                            <p>
                                E. <a className="!text-base !text-black !no-underline !font-sans"
                                      href={`mailto:${property.contacts.manager.email}`}>{property.contacts.manager.email}
                            </a>
                            </p>
                        </div>
                        <div>
                            <h3 className="">Property Owner</h3>
                            <p>
                                {property.contacts.owner.name}
                            </p>
                            <p>
                                T. <a className="!text-base !text-black !no-underline !font-sans"
                                      href={`tel:${property.contacts.owner.tel}`}>{property.contacts.owner.tel}</a>
                            </p>
                            <p>
                                E. <a className="!text-base !text-black !no-underline !font-sans"
                                      href={`mailto:${property.contacts.owner.email}`}>{property.contacts.owner.email}
                            </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[50%]">
                    <div>
                        <div className="bg-green rounded-[15px] px-5 py-4 flex justify-between items-center">
                            <div className="text-white">
                                <h3>Need work done on your property?</h3>
                                <p>Just tell us what needs to be done and we can help!</p>
                            </div>
                            <div className="ml-4">
                                <a className="btn-link bg-[#626262] !text-white hover:bg-white hover:!text-black w-full sm:w-auto" href="/">Let`s Get Started</a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 xs:grid-cols-3">
                             <div className="bg-grey">
                                 <div className="text-dark-gold font-sans-bold border-b border-light-grey" >
                                     <span>Location PASER Ranking</span>
                                 </div>
                                 <div>
                                     <div className="flex">
                                         <div className="relative ">
                                             <StatusIcon status={property.ranking.status} />
                                             <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans-semiBold text-[56px]">{property.ranking.number}</span>
                                         </div>
                                         <div>
                                             <h4>
                                                 {property.ranking.message}
                                             </h4>
                                             <p>Last Updated {property.ranking.lastUpdate} </p>
                                         </div>
                                     </div>
                                     <div>
                                         <select name="" id="">
                                             <option value="">Select Action</option>
                                             <option value="">option 1</option>
                                             <option value="">option 1</option>
                                         </select>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;