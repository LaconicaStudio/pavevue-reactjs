import { useMemo, useState, useCallback } from "react";

export const PASER_COLORS = {
    excellent: "#2ecc71",
    good: "#9be564",
    fair: "#f1c40f",
    poor: "#f39c12",
    very_poor: "#e74c3c",
    in_progress: "#3498db",
};

const STATUS_ORDER = ["excellent", "good", "fair", "poor", "very_poor", "in_progress"];
const BASE = { lat: 39.0997, lng: -94.5786 };

function jitter(v, amount) {
    return v + (Math.random() - 0.5) * amount;
}

function getMockLocations(count = 32) {
    const statuses = STATUS_ORDER;
    const cities = [
        ["Kansas City", "MO"], ["Overland Park", "KS"], ["Omaha", "NE"],
        ["Wichita", "KS"], ["Des Moines", "IA"], ["Tulsa", "OK"],
        ["Oklahoma City", "OK"], ["Lincoln", "NE"], ["Sioux Falls", "SD"],
        ["Springfield", "MO"],
    ];
    return Array.from({ length: count }, (_, i) => {
        const [city, state] = cities[i % cities.length];
        return {
            id: `PR-${String(i + 1).padStart(3, "0")}`,
            name: `Property ${String.fromCharCode(65 + (i % 26))} #${i + 1}`,
            referenceNumber: String(100 + i),
            addressLine1: "1234 Street Name, Unit #",
            city, state,
            zip: String(60000 + i),
            country: "USA",
            status: statuses[i % statuses.length],
            lat: jitter(BASE.lat + (i % 6) * 0.6 - 1.5, 0.18),
            lng: jitter(BASE.lng + (i % 5) * 1.1 - 2.2, 0.25),
            imageUrl: i % 3 === 0 ? `https://picsum.photos/seed/p${i}/220/140` : null,
        };
    });
}

export function useMapView() {
    const [query, setQuery] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    const [items, setItems] = useState(() => getMockLocations(32));

    // sorting
    const [sortBy, setSortBy] = useState("name"); // 'name' | 'status'
    const [sortDir, setSortDir] = useState("asc"); // 'asc' | 'desc'

    const deleteById = useCallback((id) => {
        setItems((prev) => prev.filter((x) => x.id !== id));
        setSelectedId((curr) => (curr === id ? null : curr));
    }, []);

    const allLocations = items;

    const filtered = useMemo(() => {
        if (!query.trim()) return allLocations;
        const q = query.toLowerCase();
        return allLocations.filter((p) => {
            const addr = `${p.addressLine1} ${p.city} ${p.state} ${p.zip} ${p.country}`.toLowerCase();
            return (
                p.name.toLowerCase().includes(q) ||
                p.referenceNumber.toLowerCase().includes(q) ||
                p.id.toLowerCase().includes(q) ||
                addr.includes(q)
            );
        });
    }, [allLocations, query]);

    const locations = useMemo(() => {
        const arr = [...filtered];
        arr.sort((a, b) => {
            let cmp = 0;
            if (sortBy === "name") {
                cmp = a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
            } else if (sortBy === "status") {
                cmp = STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status);
            }
            return sortDir === "asc" ? cmp : -cmp;
        });
        return arr;
    }, [filtered, sortBy, sortDir]);

    const center = useMemo(() => {
        if (!locations.length) return BASE;
        const lat = locations.reduce((s, p) => s + p.lat, 0) / locations.length;
        const lng = locations.reduce((s, p) => s + p.lng, 0) / locations.length;
        return { lat, lng };
    }, [locations]);

    const selectById = useCallback((id) => setSelectedId(id), []);

    return {
        locations, allCount: allLocations.length, center,
        query, setQuery,
        selectedId, selectById,
        deleteById,
        sortBy, sortDir, setSortBy, setSortDir,
    };
}
