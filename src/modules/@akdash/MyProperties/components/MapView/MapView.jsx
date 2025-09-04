import React from "react";
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapView = () => {

    const center = { lat: 10.99835602, lng: 77.01502627 };

    // const {tabItems} = useMyProperties();

    console.log('GMAPS_KEY', import.meta.env.VITE_GMAPS_KEY?.slice(-8));
    return (
        <div className="bg-grey w-full relative h-[600px] w-full  pb-7 px-6">
            <GoogleMapReact
                bootstrapURLKeys={{ key: import.meta.env.VITE_GMAPS_KEY, libraries: ['places'] }}
                defaultCenter={center}
                defaultZoom={11}
            >
                <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
            </GoogleMapReact>
        </div>
    )
}

export default MapView;