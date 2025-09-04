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
                <th scope="col" className="text-lg text-center py-2 px-4 font-sans-bold">Color code</th>
                <th scope="col" className="text-lg text-center py-2 px-4 font-sans-bold">Ranking</th>
                <th scope="col" className="text-lg text-center py-2 px-4 font-sans-bold">Condition</th>
                <th scope="col" className="text-lg text-center py-2 px-4 font-sans-bold">Appearance</th>
                <th scope="col" className="text-lg text-center py-2 px-4 font-sans-bold">Maintenance Needed</th>
            </tr>
            </thead>
            <tbody>
            {rows.map((r, i) => (
                <tr key={i} className="border-t border-light-grey last:border-b align-top">
                    <td className="py-4 px-4  text-center align-middle">
                        <IconCell src={r.src} alt={r.condition} />
                    </td>
                    <td className="py-4 px-4 text-center align-middle text-3xl md:text-4xl whitespace-nowrap lg:text-5xl 2xl:text-[56px] font-semibold">{r.ranking}</td>
                    <td className="py-4 px-4 text-center align-middle text-3xl md:text-4xl lg:text-5xl font-sans-bold">{r.condition}</td>
                    <td className="py-4 px-4 text-center align-middle text-xl">
                        <div className="max-w-[260px] mx-auto">
                            {r.appearance}
                        </div>

                    </td>
                    <td className="py-4 px-4 text-center align-middle text-xl">
                        <div className="max-w-[260px] mx-auto">
                        {r.maintenance}
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
)

}

export default Table