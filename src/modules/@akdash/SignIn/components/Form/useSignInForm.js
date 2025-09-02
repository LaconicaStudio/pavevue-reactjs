import {useState} from "react";
import {redirect, useNavigate} from "react-router-dom";
import {usePVContext} from "../../../context/PVContext";


export const useSignInForm = props => {
    const {signInWithToken} = usePVContext();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async ({ values, errors }) => {

        const loginUrl = 'http://localhost:3001/login';
        const userUrl = 'http://localhost:3001/user';

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
            setIsLoading(true)

            // login
            const response = await fetch(loginUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok || data.status !== "success") {
                console.error("Login failed:", data.message || "Unknown error");
                return;
            }

            // get user
            await signInWithToken(data.token);

            // redirect
            navigate("/welcome", { replace: true });

        } catch (error) {
            console.error('Error while submitting:', error);
        } finally {
            setIsLoading(false);
        }
    }
    return {
        isLoading,
        handleSubmit
    }
}