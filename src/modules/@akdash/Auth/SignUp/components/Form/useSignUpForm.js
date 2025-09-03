import {useNavigate} from "react-router-dom";
import {usePVContext} from "../../../../context/PVContext";

export const useSignUpForm = props => {
    const {setWasSubmitted} = props;
    const {signIn, loading, setLoading} = usePVContext();
    const navigate = useNavigate();


    const handleSubmit = async ({ values, errors }) => {
        setWasSubmitted(true);

        const url = 'http://localhost:3001/signup';

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
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok || data.status !== "success") {
                console.error("Sing Up failed:", data.message || "Unknown error");
                return;
            }

            // get user
            await signIn(payload.email, payload.password);

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