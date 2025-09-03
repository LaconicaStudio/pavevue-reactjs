import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {usePVContext} from "../../../context/PVContext";


export const useDashboardPage = props => {
    const {} = usePVContext();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    // const tabItems = [
    //     { id: 1, name: "Property Overview", content: <Overview /> },
    //     { id: 2, name: "Aerial Assessment", content: <Aerial /> },
    //     { id: 3, name: "Ground Assessment", content: <Ground /> },
    //     { id: 4, name: "Property Report", content: <Report /> },
    //     { id: 5, name: "Find Contractor(s)", content: <FindContractors /> },
    //     { id: 6, name: "Project(s)", content: <Projects /> },
    // ];

    const tabItems = [
        { id: 1, name: "Property Overview", content: "Property Overview" },
        { id: 2, name: "Aerial Assessment", content: "Aerial Assessment" },
        { id: 3, name: "Ground Assessment", content: "Ground Assessment" },
        { id: 4, name: "Property Report", content: "Property Report" },
        { id: 5, name: "Find Contractor(s)", content:"Find Contractor(s)" },
        { id: 6, name: "Project(s)", content: "Project(s)" },
    ];



    return {
        tabItems
    }
}