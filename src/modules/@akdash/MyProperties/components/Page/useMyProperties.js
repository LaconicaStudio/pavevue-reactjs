import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {usePVContext} from "../../../context/PVContext";
import MapView from "../MapView";
import PaserRatings from "../PaserRatings";


export const useMyProperties = props => {
    const {} = usePVContext();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const tabItems = [
        { id: 1, name: "Map View", component: MapView  },
        { id: 2, name: "Understanding PASER ratings", component: PaserRatings  },
    ];


    return {
        tabItems
    }
}