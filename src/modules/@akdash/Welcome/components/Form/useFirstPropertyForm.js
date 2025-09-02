import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {usePVContext} from "../../../context/PVContext";


export const useFirstPropertyForm = props => {
    const {} = usePVContext();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async ({ values, errors }) => {

        // const url = 'http://localhost:3001/property';

        if (errors && Object.keys(errors).length) return;

        const payload = {
            propertyName: values.propertyName || "",
            propertyNumber: values.propertyNumber || "",
            email: values.email || ""
        };


        console.log(payload);

        navigate("/dashboard", { replace: true });

        // try {
        //     setIsLoading(true)
        //     const response = await fetch(url, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(payload),
        //     });
        //
        //     setIsLoading(false);
        //
        //     const result = await response.json();
        //     console.log(result.status);
        //
        //     if (result.status === "success") {
        //         console.log(result.status);
        //     } else  {
        //         console.log("Login failed: ", result.message);
        //     }
        //
        // } catch (error) {
        //     console.error('Error while submitting:', error);
        // } finally {
        //     setIsLoading(false);
        // }
    }
    return {
        isLoading,
        handleSubmit
    }
}