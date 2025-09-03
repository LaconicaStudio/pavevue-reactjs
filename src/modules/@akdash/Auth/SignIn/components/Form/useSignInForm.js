import {useState} from "react";
import {redirect, useNavigate} from "react-router-dom";
import {usePVContext} from "../../../../context/PVContext";


export const useSignInForm = props => {
    const {signIn, loading, setLoading} = usePVContext();
    const navigate = useNavigate();


    const handleSubmit = async ({ values, errors }) => {

        if (errors && Object.keys(errors).length) return;

        const payload = {
            email: values.email?.trim() || "",
            password: values.password || ""
        };

        if (!payload.email || !payload.password) {
            console.warn("Email and password are required");
            return;
        }

        try {
            setLoading(true)

            // get user
            await signIn(payload.email, payload.password);

            // redirect
            navigate("/dashboard", { replace: true });

        } catch (error) {
            console.error('Error while submitting:', error?.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        handleSubmit
    }
}