import React from "react";

import {useOverview} from "./useOverview.js";
import {StatusIcon} from "./StatusIcon";


const Overview = () => {

    const {property} = useOverview();

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="w-full lg:pr-[30px]">
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
                <div className="w-full ">
                    <div >
                        <div className="bg-green rounded-[15px] px-5 py-4 flex justify-between items-center mb-4">
                            <div className="text-white">
                                <h3 className="font-sans-semiBold text-2xl mb-[-5px]">Need work done on your property?</h3>
                                <p className="text-lg">Just tell us what needs to be done and we can help!</p>
                            </div>
                            <div className="ml-4">
                                <a className="btn-link bg-[#626262] !text-white hover:bg-white hover:!text-black w-full sm:w-auto" href="/">Let`s Get Started</a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                             <div className="bg-grey rounded-[15px] flex flex-col">
                                 <div className="text-dark-gold font-sans-bold border-b border-light-grey pt-5 px-5 pb-3" >
                                     <span>Location PASER Ranking</span>
                                 </div>
                                 <div className="pb-6  px-5 flex flex-col justify-between h-full">
                                     <div className="flex justify-center items-center">
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
                            <div className="bg-grey rounded-[15px] flex flex-col">
                                <div className="text-dark-gold font-sans-bold border-b border-light-grey  pt-5 px-5 pb-3" >
                                    <span>PASER Ranking – Action Report</span>
                                </div>
                                <div className="pb-6  px-5 flex flex-col justify-between h-full">
                                    <div className="flex justify-center items-center">
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
                            <div className="bg-grey rounded-[15px] flex flex-col">
                                <div className="text-dark-gold font-sans-bold border-b border-light-grey  pt-5 px-5 pb-3" >
                                    <span>Active Projects</span>
                                </div>
                                <div className="pb-6  px-5 flex flex-col justify-between h-full">
                                    <div className="flex justify-center items-center">
                                        <div>
                                            <span className="text-[110px] font-sans-semiBold">{property.activeProjects}</span>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn-link btn-secondary mx-auto" type="button">View Project(s)</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-grey rounded-[15px] flex flex-col">
                                <div className="text-dark-gold font-sans-bold border-b border-light-grey  pt-5 px-5 pb-3" >
                                    <span>Open RFQ(s)</span>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center" >
                                        <div>
                                            <span className="text-[110px] font-sans-semiBold" >{property.openRFQs}</span>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn-link btn-secondary mx-auto" type="button">View Request</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-grey rounded-[15px] flex flex-col">
                                <div className="text-dark-gold font-sans-bold border-b border-light-grey  pt-5 px-5 pb-3" >
                                    <span>Next Inspection Date</span>
                                </div>
                                <div className="pb-6  px-5 flex flex-col justify-between h-full">
                                    <div className="flex justify-center items-center h-full">
                                        <div>
                                            <span>{property.nextInspectionDate}</span>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn-link btn-secondary mx-auto" type="button">View Date(s)</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-grey rounded-[15px] flex flex-col">
                                <div className="text-dark-gold font-sans-bold border-b border-light-grey  pt-5 px-5 pb-3" >
                                    <span>Team Member(s)</span>
                                </div>
                                <div className="pb-6 px-5 flex flex-col justify-between h-full">
                                    <div className="flex justify-center items-center">
                                        <div>
                                            <span className="text-[110px] font-sans-semiBold">{property.teamMembers}</span>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn-link btn-secondary mx-auto" type="button">View Team</button>
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