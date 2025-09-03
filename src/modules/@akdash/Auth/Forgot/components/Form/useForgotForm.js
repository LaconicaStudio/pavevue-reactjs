import {useNavigate} from "react-router-dom";
import {usePVContext} from "../../../../context/PVContext";

export const useForgotForm = props => {
    const {loading, setLoading} = usePVContext();
    const navigate = useNavigate();


    const handleSubmit = async ({ values, errors }) => {
        const url = 'http://localhost:3001/forgot';

        if (errors && Object.keys(errors).length) return;


        const payload = {
            email: values.email || "",
        };


        try {
            setLoading(true)

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok || data.status !== "success") {
                console.error("Forgot failed:", data.message || "Unknown error");
                return;
            }

            // redirect
            navigate("/singin", { replace: true });

        } catch (error) {
            console.error('Error while submitting:', error);
        } finally {
            setLoading(false);
        }
    }
    return {
        loading,
        handleSubmit
    }
}