import React, { useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import PropertyList from "./PropertyList";
import { useMapView, PASER_COLORS } from "./useMapView";
import { useNavigate } from "react-router-dom";
import Marker from "./Marker";

const Dot = ({ color, selected, title }) => (
    <div
        title={title}
        style={{
            width: selected ? 18 : 14,
            height: selected ? 18 : 14,
            borderRadius: "9999px",
            background: color,
            border: "2px solid white",
            boxShadow: "0 0 0 1px rgba(0,0,0,.25)",
            transform: selected ? "translate(-2px, -2px)" : "none",
        }}
    />
);

export default function MapView() {
    const {
        query, setQuery,
        locations, center, allCount,
        selectedId, selectById,
        deleteById,
        sortBy, sortDir, setSortBy, setSortDir,
    } = useMapView();

    const mapRef = useRef(null);
    const navigate = (() => {
        try { return useNavigate(); } catch { return null; }
    })();

    const [isFs, setIsFs] = useState(false);
    const mapContainerRef = useRef(null);

    const handleApiLoaded = ({ map }) => { mapRef.current = map; };

    const focusOn = (id) => {
        selectById(id);
        const p = locations.find((x) => x.id === id);
        if (p && mapRef.current) {
            mapRef.current.panTo({ lat: p.lat, lng: p.lng });
            mapRef.current.setZoom(Math.max(mapRef.current.getZoom(), 8));
        }
    };

    const onView = (prop) => {
        const url = `/dashboard/properties/${prop.id}`;
        if (navigate) navigate(url);
        else window.location.href = url;
    };

    const onDelete = (prop) => {
        deleteById(prop.id);
    };

    const zoomBy = (delta) => {
        if (!mapRef.current) return;
        mapRef.current.setZoom(mapRef.current.getZoom() + delta);
    };

    const toggleFullscreen = async () => {
        const el = mapContainerRef.current;
        if (!el) return;
        try {
            if (!document.fullscreenElement) {
                await el.requestFullscreen();
                setIsFs(true);
            } else {
                await document.exitFullscreen();
                setIsFs(false);
            }
        } catch {}
    };

    const GRAYSCALE_STYLES = [
        { elementType: "geometry", stylers: [{ saturation: -100 }, { lightness: 10 }] },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#4a4a4a" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }, { weight: 2 }] },

        { featureType: "administrative", elementType: "geometry", stylers: [{ lightness: 40 }] },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        { featureType: "transit", stylers: [{ visibility: "off" }] },

        { featureType: "road", elementType: "geometry", stylers: [{ lightness: 40 }] },
        { featureType: "road", elementType: "geometry.stroke", stylers: [{ lightness: 60 }] },
        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#5c5c5c" }] },

        { featureType: "water", elementType: "geometry", stylers: [{ lightness: 60 }] },
    ];

    return (
        <div className="w-full">
            {/* верхня смуга: заголовок, пошук, сортування */}
            <div className="flex flex-wrap items-center gap-3 px-6 py-3 border-b">
                <div className="text-xl font-semibold">My Property Locations</div>

                <div className="ml-auto w-full max-w-[520px]">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by property address or reference number"
                        className="search-map w-full rounded-xl text-black border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black/10"
                    />
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Sort by</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="rounded-lg border border-gray-300 px-2 py-1 text-sm"
                    >
                        <option value="name">Name</option>
                        <option value="status">Status</option>
                    </select>
                    <button
                        onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
                        className="rounded-lg border border-gray-300 px-2 py-1 text-sm"
                        title="Toggle direction"
                    >
                        {sortDir === "asc" ? "Asc" : "Desc"}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Ліва колонка — список */}
                <div className="p-4">
                    <PropertyList
                        items={locations}
                        selectedId={selectedId}
                        onHover={(id) => selectById(id)}
                        onSelect={(id) => focusOn(id)}
                        onView={onView}
                        onDelete={onDelete}
                    />
                </div>

                {/* Права колонка — мапа */}
                <div ref={mapContainerRef} className="relative h-[660px]">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: import.meta.env.VITE_GMAPS_KEY, libraries: ["places"] }}
                        defaultCenter={center}
                        center={center}
                        defaultZoom={8}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={handleApiLoaded}
                        options={{
                            styles: GRAYSCALE_STYLES,
                            fullscreenControl: false,
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                        }}
                    >
                        {locations.map((p) => (
                            <Marker
                                key={p.id}
                                lat={p.lat}
                                lng={p.lng}
                                color={PASER_COLORS[p.status]}
                                selected={p.id === selectedId}
                                property={p}
                                onHover={(prop) => selectById(prop?.id || null)}
                            />
                        ))}
                    </GoogleMapReact>

                    {/* Легенда */}
                    <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 backdrop-blur px-3 py-2 shadow">
                        <div className="text-xs text-gray-600">
                            Showing {locations.length} of {allCount}
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs">
                            {Object.entries(PASER_COLORS).map(([k, v]) => (
                                <span key={k} className="inline-flex items-center gap-1">
                  <span style={{ background: v }} className="inline-block h-3 w-3 rounded-full border border-white shadow-[0_0_0_1px_rgba(0,0,0,.15)]" />
                                    {k.replace("_", " ")}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Кастомні контролси */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-3">
                        <button onClick={() => zoomBy(-1)} className="h-10 w-10 grid place-items-center rounded-full bg-neutral-900 text-white shadow">−</button>
                        <button onClick={() => zoomBy(1)} className="h-10 w-10 grid place-items-center rounded-full bg-neutral-900 text-white shadow">+</button>
                        <button onClick={toggleFullscreen} className="h-10 rounded-full bg-neutral-900 text-white px-5 shadow">
                            {isFs ? "Exit Full Screen" : "Full Screen"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
