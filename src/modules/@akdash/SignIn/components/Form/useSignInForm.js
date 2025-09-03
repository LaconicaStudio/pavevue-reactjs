import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {usePVContext} from "../../../context/PVContext";


export const useSignInForm = props => {
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

        if (payload.email && payload.password) {
            let email = payload.email;
            let password = payload.password;
            try {
                const res = await fetch("https://pavevue.loc/api/users/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                    credentials: "include",
                });
    
                const data = await res.json();
alert(JSON.stringify(data));
                if (!res.ok) {
                    setError(data.error || "Error");
                } else {
                    alert("Success");
                    //window.location.href = "/profile";
                }
            } catch (err) {
                alert(err);
                setError("Connection error");
            } finally {
                setLoading(false);
            }

            signIn();
            // navigate("/dashboard");
            navigate("/welcome");
        }

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
        // setIsLoggedIn();
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
    
    const handleGetData = async ({ values, errors }) => {
        try {
            const res = await fetch("https://pavevue.loc/api/users/test", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });

            const data = await res.json();

alert(JSON.stringify(data));

            if (!res.ok) {
                setError(data.error || "Error");
            } else {
                alert("Success");
                //window.location.href = "/profile";
            }
        } catch (err) {
            alert(err);
            setError("Connection error");
        } finally {
            //setLoading(false);
        }
   
    }
 
    return {
        isLoading,
        handleSubmit,
        handleGetData
    }
}