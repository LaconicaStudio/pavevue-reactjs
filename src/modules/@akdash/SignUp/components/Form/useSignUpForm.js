import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {usePVContext} from "../../../context/PVContext";


export const useSignUpForm = props => {
    const {signIn} = usePVContext();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async ({ values, errors }) => {

        // const url = `test`;

        if (errors && Object.keys(errors).length) return;

        const payload = {
            email: values.email || "",
            password: values.password || ""
        };

        console.log("Form submitted:", payload);
    }

    return {
        isLoading,
        handleSubmit
    }
}