import {useNavigate} from "react-router-dom";
import {usePVContext} from "../../../../context/PVContext";

export const useSignUpForm = props => {
    const {setWasSubmitted} = props;
    const {refreshUser, loading, setLoading} = usePVContext();
    const navigate = useNavigate();


    const handleSubmit = async ({ values, errors }) => {
        setWasSubmitted(true);

        if (errors && Object.keys(errors).length) return;


        const payload = {
            firstname: values.firstname?.trim() || "",
            lastname: values.lastname || "",
            email: values.email || "",
            name: values.name || "",
            password: values.password || "",
        };

        try {
            setLoading(true)

            // signup
            const response = await fetch('http://localhost:3001/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(payload),
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok || data.status !== "success") {
                console.error("Sing Up failed:", data.message || "Unknown error");
                return;
            }

            // get user
            await refreshUser?.();

            // redirect
            navigate("/welcome", { replace: true });

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