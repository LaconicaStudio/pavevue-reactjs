import {useState} from "react";

export const useSignInForm = props => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        // const url = `test`;


        const payload = {
            email,
            password: pass
        };

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
        //         console.log("Login success");
        //     } else  {
        //         console.log("Login failed: ", result.message);
        //     }
        //
        // } catch (error) {
        //     console.error('Error while submitting:', error);
        // } finally {
        //     setIsLoading(false);
        // }

        console.log("Form submitted:", payload);
    }
    return {
        email,
        setEmail,
        pass,
        setPass,
        isLoading,
        handleSubmit
    }
}