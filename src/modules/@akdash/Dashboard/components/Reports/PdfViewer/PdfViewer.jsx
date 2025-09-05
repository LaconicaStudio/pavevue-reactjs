import React, {useEffect, useRef, useState} from "react";
import { Document, Page, pdfjs } from "react-pdf";


import workerSrc from "pdfjs-dist/build/pdf.worker.min?url";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const PdfViewer = ({ url }) => {
    const [numPages, setNumPages] = useState(null);
    const [page, setPage] = useState(1);
    const [scale, setScale] = useState(1.0);
    const containerRef = useRef(null);
    const [fitWidth, setFitWidth] = useState(true);
    const [pageWidth, setPageWidth] = useState(800);

    useEffect(() => {
        if (!fitWidth) return;
        const ro = new ResizeObserver(() => {
            const w = containerRef.current?.clientWidth ?? 800;
            setPageWidth(Math.max(320, Math.floor(w - 24))); // падінг
        });
        if (containerRef.current) ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, [fitWidth]);

    useEffect(() => { setPage(1); }, [url]);

    const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

    const download = async () => {
        const res = await fetch(url, { credentials: "include" }).catch(() => null);
        if (!res || !res.ok) return;
        const blob = await res.blob();
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = url.split("/").pop() || "report.pdf";
        a.click();
        URL.revokeObjectURL(a.href);
    };

    const canPrev = page > 1;
    const canNext = numPages && page < numPages;

    return (
        <div className="w-full h-full flex flex-col">
            {/* Toolbar */}
            <div className="flex items-center gap-2 p-2 border-b bg-white sticky top-0 z-10">
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={!canPrev}>Prev</button>
                <span>{page} / {numPages ?? "…"}</span>
                <button onClick={() => setPage(p => (numPages ? Math.min(numPages, p + 1) : p))} disabled={!canNext}>Next</button>
                <div className="mx-3 h-5 w-px bg-gray-300" />
                <button onClick={() => setScale(s => Math.max(0.5, + (s - 0.1).toFixed(2)))}>-</button>
                <span>{Math.round(scale * 100)}%</span>
                <button onClick={() => setScale(s => Math.min(3, + (s + 0.1).toFixed(2)))}>+</button>
                <div className="mx-3 h-5 w-px bg-gray-300" />
                <button onClick={() => setFitWidth(f => !f)}>{fitWidth ? "Fixed width" : "Fit width"}</button>
                <div className="ml-auto flex items-center gap-3">
                    <a href={url} target="_blank" rel="noreferrer">Open in new tab</a>
                    <button onClick={download}>Download PDF</button>
                </div>
            </div>

            {/* Pages */}
            <div ref={containerRef} className="flex-1 overflow-auto bg-gray-50 p-3">
                {url ? (
                    <Document file={url} onLoadSuccess={onLoadSuccess} loading="Loading PDF…">
                        {/* показ по сторінках (одна сторінка за раз) */}
                        <Page
                            pageNumber={page}
                            width={fitWidth ? pageWidth : undefined}
                            scale={fitWidth ? 1 : scale}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                        />
                    </Document>
                ) : (
                    <div className="h-full grid place-items-center text-gray-400">Select a report</div>
                )}
            </div>
        </div>
    )
}

export default PdfViewer;