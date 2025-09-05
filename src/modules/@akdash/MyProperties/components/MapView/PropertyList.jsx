import React, { useRef, useEffect, useState } from "react";
import { PASER_COLORS } from "./useMapView";

const StatusDot = ({ color }) => (
    <span
        className="inline-block rounded-full border border-white shadow-[0_0_0_1px_rgba(0,0,0,.15)]"
        style={{ width: 14, height: 14, background: color }}
    />
);

function Kebab({ onView, onDelete }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (!ref.current) return;
            if (!ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                className="h-8 w-8 grid place-items-center rounded-full hover:bg-gray-100"
                onClick={() => setOpen((v) => !v)}
                aria-label="Actions"
            >
                <span className="text-xl leading-none">⋯</span>
            </button>
            {open && (
                <div className="absolute right-0 top-9 z-10 min-w-36 overflow-hidden rounded-xl border bg-white shadow">
                    <button
                        className="w-full px-3 py-2 text-left hover:bg-gray-50"
                        onClick={() => { setOpen(false); onView?.(); }}
                    >
                        View
                    </button>
                    <button
                        className="w-full px-3 py-2 text-left text-red-600 hover:bg-red-50"
                        onClick={() => { setOpen(false); onDelete?.(); }}
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}

export default function PropertyList({ items, selectedId, onHover, onSelect, onView, onDelete }) {
    const listRef = useRef(null);

    useEffect(() => {
        if (!selectedId || !listRef.current) return;
        const el = listRef.current.querySelector(`[data-id="${selectedId}"]`);
        if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }, [selectedId]);

    return (
        <div ref={listRef} className="h-[620px] overflow-y-auto pr-2" style={{ scrollbarWidth: "thin" }}>
            <ul className="space-y-4">
                {items.map((p) => {
                    const active = p.id === selectedId;
                    return (
                        <li
                            key={p.id}
                            data-id={p.id}
                            onMouseEnter={() => onHover?.(p.id)}
                            onMouseLeave={() => onHover?.(null)}
                            className={`flex items-center gap-4 rounded-xl border px-3 py-3 transition
                ${active ? "border-gray-900/30 shadow" : "border-gray-200 hover:border-gray-300"}`}
                        >
                            <div className="shrink-0 pt-1">
                                <StatusDot color={PASER_COLORS[p.status]} />
                            </div>

                            <button onClick={() => onSelect?.(p.id)} className="min-w-0 grow text-left">
                                <div className="font-semibold truncate">{p.name}</div>
                                <div className="text-xs text-gray-600">Property Reference #: {p.referenceNumber}</div>
                                <div className="text-xs text-gray-600 truncate">{p.addressLine1}</div>
                                <div className="text-xs text-gray-600 truncate">
                                    {p.city}, {p.state}, {p.zip}, {p.country}
                                </div>
                            </button>

                            <div className="shrink-0">
                                {p.imageUrl ? (
                                    <img src={p.imageUrl} alt="" className="h-[70px] w-[120px] rounded-lg object-cover" />
                                ) : (
                                    <div className="h-[70px] w-[120px] rounded-lg bg-gray-200 grid place-items-center text-gray-500">
                                        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M4 3h16a1 1 0 0 1 1 1v14h-2V5H5v14H3V4a1 1 0 0 1 1-1zm3 18h10v-5l-3-3-3 3-2-2-2 2v5z" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            <Kebab
                                onView={() => onView?.(p)}
                                onDelete={() => onDelete?.(p)}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
