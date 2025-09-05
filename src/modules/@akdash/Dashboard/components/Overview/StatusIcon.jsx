import React from "react";

const ICONS = {
    failed:      { kind: "single", src: "/images/circles/failed.svg" },
    "very-poor": { kind: "single", src: "/images/circles/very-poor.svg" },

    fair:        { kind: "stacked", bottom: "/images/circles/fair.svg" },
    good:        { kind: "stacked", bottom: "/images/circles/good.svg" },
    "very-good": { kind: "stacked", bottom: "/images/circles/very-good.svg" },
    excellent:   { kind: "stacked", bottom: "/images/circles/excellent.svg" },
};


const StackedIcon = React.memo(function StackedIcon({
                                                        bottom,
                                                        top = "/images/circles/center.svg",
                                                        size = 85,
                                                        topSize = 75,
                                                        className = "",
                                                    }) {
    return (
        <div
            className={`relative inline-block ${className}`}
            style={{ width: size, height: size }}
            aria-label="status icon"
            role="img"
        >
            <img
                src={bottom}
                alt=""
                className="absolute inset-0 m-auto"
                style={{ width: size, height: size }}
                aria-hidden
            />

            <img
                src={top}
                alt=""
                className="absolute inset-0 m-auto object-contain"
                style={{ width: topSize, height: topSize }}
                aria-hidden
            />
        </div>
    );
});


export function StatusIcon({status, size = 85, top = "/images/circles/center.svg", topSize = 75, className = "",}) {
    const icon = ICONS[status];

    if (!icon) {
        return null;
    }

    if (icon.kind === "single") {
        return (
            <img
                src={icon.src}
                alt={`${status} status`}
                width={size}
                height={size}
                className={`block ${className}`}
                style={{ width: size, height: size }}
            />
        );
    }

    return (
        <StackedIcon
            bottom={icon.bottom}
            top={top}
            size={size}
            topSize={topSize}
            className={className}
        />
    );
}
