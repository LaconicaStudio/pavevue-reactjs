import React, {useState} from "react";

import {useReports} from "./useReports.js";
import ReportItem from "./ReportItem";
import PdfViewer from "./PdfViewer/index.js";

const Reports = () => {
    const {reportList} = useReports();
    const [activeId, setActiveId] = useState(reportList.items[0]?.id ?? null);
    const active = reportList.items.find(i => i.id === activeId) || null;

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

                    <div className="border-b border-gold flex justify-between pb-3.5 mb-6 items-baseline pt-11">
                        <h2 className="text-xl font-sans-bold">Archived Previous Reports</h2>
                    </div>
                    <p className="leading-5">Archived previous reports will be retained until a new report is generated, at which point they will be replaced. To retain a copy for your records, please download the documents at your earliest convenience.</p>
                    <div className="mt-6">
                        <button className="btn-link btn-secondary mx-auto" type="button">Download Archived Previous Reports</button>
                    </div>
                </div>
                <div className="lg:pl-11">
                    <PdfViewer url={active?.pdfSrc} />
                </div>
            </div>
        </div>
    )
}

export default Reports;