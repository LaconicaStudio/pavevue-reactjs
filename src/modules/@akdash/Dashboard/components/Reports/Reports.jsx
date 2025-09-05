import React, {useState} from "react";

import {useReports} from "./useReports.js";
import ReportItem from "./ReportItem";
import PdfViewer from "./PdfViewer/index.js";




const Reports = () => {
    const {reportList} = useReports();
    const [activeId, setActiveId] = useState(reportList.items[0]?.id ?? null);
    const active = reportList.items.find(i => i.id === activeId) || null;
    console.log(active);
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:[grid-template-columns:35.5%_64.5%]">
                <div>
                    <div className="border-b border-gold flex justify-between pb-3.5 mb-6 items-baseline">
                        <h2 className="text-xl font-sans-bold">Current Reports</h2>
                        <div>
                            <button type={"button"} className="cursor-pointer text-xs text-dark-gold underline transition-all duration-300 hover:no-underline"><span>Request A New Report</span></button>
                        </div>
                    </div>

                    <ul className="grid gap-4">
                        {reportList.items?.map(item => {
                           const isActive = item.id === activeId;

                           return <ReportItem
                               key={item.id}
                               item={item}
                               setActiveId={setActiveId}
                               isActive={isActive}
                           />
                        })}

                    </ul>
                </div>
                <div>
                    <PdfViewer url={active?.pdfSrc} />
                </div>
            </div>
        </div>
    )
}

export default Reports;