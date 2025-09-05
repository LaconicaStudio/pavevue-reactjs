import React from "react";

export default function Marker({ color, selected, property, onHover }) {
    return (
        <div
            onMouseEnter={() => onHover(property)}
            onMouseLeave={() => onHover(null)}
            style={{
                position: "relative",
                width: selected ? 18 : 14,
                height: selected ? 18 : 14,
                borderRadius: "9999px",
                background: color,
                transform: selected ? "translate(-2px, -2px)" : "none",
                cursor: "pointer",
            }}
        >
            {selected && (
                <div
                    style={{
                        position: "absolute",
                        bottom: "150%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "white",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                        zIndex: 10,
                    }}
                >
                    <strong>{property.name}</strong>
                    <div style={{ fontSize: "11px", color: "#555" }}>
                        Ref: {property.referenceNumber}
                    </div>
                    <div style={{ fontSize: "11px", color: "#555" }}>
                        {property.city}, {property.state}
                    </div>
                </div>
            )}
        </div>
    );
}
