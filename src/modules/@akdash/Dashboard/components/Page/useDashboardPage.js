import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {usePVContext} from "../../../context/PVContext";
import Overview from "../Overview";
import Aerial from "../Aerial";
import Reports from "../Reports";


export const useDashboardPage = props => {
    const {} = usePVContext();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const property =
        { id: 1,
          name: "Property Overview",
          number: "0000",
          address: '1234 Street Name, City Name, State, 12345'
        };


    // const tabItems = [
    //     { id: 1, name: "Property Overview", content: <Overview /> },
    //     { id: 2, name: "Aerial Assessment", content: <Aerial /> },
    //     { id: 3, name: "Ground Assessment", content: <Ground /> },
    //     { id: 4, name: "Property Report", content: <Report /> },
    //     { id: 5, name: "Find Contractor(s)", content: <FindContractors /> },
    //     { id: 6, name: "Project(s)", content: <Projects /> },
    // ];

    const tabItems = [
        { id: 1, name: "Property Overview", component: Overview },
        // { id: 2, name: "Aerial Assessment", component: Aerial },
        { id: 2, name: "Aerial Assessment", content: "Aerial Assessment" },
        { id: 3, name: "Ground Assessment", content: "Ground Assessment" },
        { id: 4, name: "Property Report", component: Reports},
        { id: 5, name: "Find Contractor(s)", content:"Find Contractor(s)" },
        { id: 6, name: "Project(s)", content: "Project(s)" },
    ];



    return {
        property,
        tabItems
    }
}