import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {usePVContext} from "../../../../context/PVContext";

export const usePdfViewer = ({url}) => {
    const [numPages, setNumPages] = useState(null);
    const [page, setPage] = useState(1);
    const containerRef = useRef(null);
    const [pageWidth, setPageWidth] = useState(0);

    const {setLoading} = usePVContext();

    useEffect(() => {
        if (url) setLoading(true);
    }, [url, setLoading]);

    useEffect(() => {
        setPage(1);
    }, [url]);

    const measure = () => {
        const w = containerRef.current?.clientWidth ?? 0;
        setPageWidth(w > 0 ? w : 0);
    };

    useLayoutEffect(() => {
        measure();
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;
        const ro = new ResizeObserver(() => measure());
        ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, [containerRef.current]);

    useEffect(() => {
        const onResize = () => measure();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const onLoadSuccess = ({ numPages }) => {
        setLoading(false);
        setNumPages(numPages);
    };
    const onLoadError = () => setLoading(false);
    const onSourceError = () => setLoading(false);

    const download = async () => {
        if (!url) return;

        const res = await fetch(url, { credentials: "include" }).catch(() => null);

        if (!res?.ok) {
            setLoading(false);

            return;
        }

        const blob = await res.blob();

        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = url.split("/").pop();
        a.click();

        URL.revokeObjectURL(a.href);
    };

    const canPrev = page > 1;
    const canNext = numPages && page < numPages;

    const nextPage = () => {
        setPage(p => (numPages ? Math.min(numPages, p + 1) : p))
    }

    const prevPage = () => {
        setPage(p => Math.max(1, p - 1))
    }


    return {
        numPages,
        page,
        setPage,
        containerRef,
        pageWidth,
        onLoadSuccess,
        onSourceError,
        onLoadError,
        download,
        canPrev,
        canNext,
        nextPage,
        prevPage
    }
}