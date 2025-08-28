import React, { useState } from "react";
import Form from "../Form";


export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("http://pavevue.loc/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            });
//alert('testing...');
            const data = await res.json();
            
alert(JSON.stringify(data));

            if (!res.ok) {
                setError(data.error || "Error");
            } else {
                alert("Success");
                //window.location.href = "/profile";
            }
        } catch (err) {
            alert('test');
            alert(err);
            setError("Connection error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
                <img src="/images/bg-image.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div></div>
                <div className="text-left">
                    <div></div>
                    <div style={{ maxWidth: 400, margin: "50px auto", color:"white" }}>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: 10 }}>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={{ width: "100%", padding: "8px",  background: "white", color:"black" }}
                                />
                            </div>
                            <div style={{ marginBottom: 10 }}>
                                <label>Password:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    style={{ width: "100%", padding: "8px", background: "white", color:"black" }}
                                />
                            </div>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    background: "blue",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                {loading ? "..." : "Log In"}
                            </button>
                        </form>
                    </div>
                </div></div></div>
    );
}
