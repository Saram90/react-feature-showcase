import { useEffect, useState } from "react";
import { cookieService } from "../../utils/cookieService";

const RememberMeLogin = ({ onCookieChange }) => {
    const [email, setEmail] = useState("");
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        const savedEmail = cookieService.get("rememberedEmail");

        if (savedEmail) {
            setEmail(savedEmail);
            setRemember(true);
        }
    }, []);

    const handleLogin = () => {
        if (remember) {
            cookieService.set("rememberedEmail", email);
        } else {
            cookieService.remove("rememberedEmail");
        }

        onCookieChange();

        alert("Login Successful");
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">
                Remember Me Login
            </h2>

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded mb-3"
            />

            <label className="flex gap-2 mb-4">
                <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                />
                Remember Me
            </label>

            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Login
            </button>
        </div>
    );
};

export default RememberMeLogin;