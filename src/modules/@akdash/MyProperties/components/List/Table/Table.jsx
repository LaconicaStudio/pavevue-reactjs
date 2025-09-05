import React from "react";
import {useTable} from "./useTable.js";

const Table = () => {
const {rows} = useTable();

    const StackedIcon = ({ top, bottom, size = 96, topSize = 75, className = "" }) => (
        <div
            className={`relative inline-block ${className}`}
            style={{ width: size, height: size }}
        >
            <img src={bottom} alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-full md:h-full" />

            <img
                src={top}
                alt=""
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[46%] w-14 h-14 md:w-full md:h-full max-w-[75px] max-h-[75px] object-contain"
            />
        </div>
    );

    const IconCell = ({ src, size = 85, alt = "" }) => {
        if (!src) return null;
        const parts = src.split(",").map(s => s.trim());
        if (parts.length === 2) {
            const [top, bottom] = parts;
            return <StackedIcon top={top} bottom={bottom} size={size} />;
        }
        return <img src={parts[0]} alt={alt} width={size} height={size} className="w-16 h-16 md:w-full md:h-full mx-auto max-w-[85px] max-h-[85px]" />;
    };

return (
    <div className="overflow-x-auto">
        <table className="min-w-[920px] w-full border-collapse">
            <thead>
            <tr className="bg-[#B29453] text-white">
                <th scope="col" className="text-lg text-center py-2 px-4 font-sans-bold">Name</th>
                <th scope="col" className="text-lg text-center py-2 px-4 font-sans-bold">Adreess</th>
                <th scope="col" className="text-lg text-center py-2 px-4 font-sans-bold">City</th>
                <th scope="col" className="text-lg text-center py-2 px-4 font-sans-bold">State</th>
                <th scope="col" className="text-lg text-center py-2 px-4 font-sans-bold">Post Code</th>
            </tr>
            </thead>
            <tbody>
            {rows.map((r, i) => (
                <tr key={i} className="border-t border-light-grey last:border-b align-top">
                    <td className="py-4 px-4 align-middle text-1xl md:text-2xl lg:text-3xl ">{r.name}</td>
                    <td className="py-4 px-4 align-middle text-1xl md:text-2xl lg:text-3xl ">{r.site_address_street}</td>
                    <td className="py-4 px-4 align-middle text-1xl md:text-2xl lg:text-3xl ">{r.site_address_city}</td>
                    <td className="py-4 px-4 align-middle text-1xl md:text-2xl lg:text-3xl ">{r.site_address_state}</td>
                    <td className="py-4 px-4 align-middle text-1xl md:text-2xl lg:text-3xl ">{r.site_address_postalcode}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
)

}

export default Table