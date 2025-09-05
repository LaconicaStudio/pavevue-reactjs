import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {Arrow} from "../../../../UI";
import workerSrc from "pdfjs-dist/build/pdf.worker.min?url";
import {usePdfViewer} from "./usePdfViewer.js";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const PdfViewer = ({ url }) => {
    const {
        numPages,
        page,
        setPage,
        containerRef,
        pageWidth,
        onLoadSuccess,
        onSourceError,
        onLoadError,
        canPrev,
        canNext,
        download,
        nextPage,
        prevPage
    } = usePdfViewer({url});


    return (
        <div className="w-full h-full flex flex-col">
            <div className="border-b border-gold flex justify-end pb-3.5 mb-6 items-baseline pt-1">
                <div>
                    <button type={"button"}
                            onClick={download}
                            className="cursor-pointer text-xs text-dark-gold underline transition-all duration-300 hover:no-underline">
                        <span>Download PDF</span>
                    </button>
                </div>
            </div>

            {/* Pages */}
            <div ref={containerRef} className="flex-1 p-3">
                {url ? (
                    <Document file={url}
                              onLoadSuccess={onLoadSuccess}
                              onLoadError={onLoadError}
                              onSourceError={onSourceError}
                              loading={null}
                    >
                        <Page
                            pageNumber={page}
                            width={pageWidth}
                            scale={1}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                        />
                    </Document>
                ) : (
                    <div className="h-full grid place-items-center text-gray-400">Select a report</div>
                )}
            </div>

            <div className="text-center">
                <div className="flex items-center gap-4 p-2 w-max mx-auto">
                    <button onClick={prevPage}
                            disabled={!canPrev}
                            className={`w-8 h-8 flex items-center justify-center ${!canPrev ? "opacity-50" : "cursor-pointer hover:bg-grey" }`}
                    >
                        <Arrow position={'right'}/>
                    </button>
                    <span>{page} of {numPages ?? "…"}</span>
                    <button onClick={nextPage}
                            disabled={!canNext}
                            className={`w-8 h-8 flex items-center justify-center ${!canNext ? "opacity-50" : "cursor-pointer hover:bg-grey" }`}
                    >
                        <Arrow position={'left'}/>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default PdfViewer;