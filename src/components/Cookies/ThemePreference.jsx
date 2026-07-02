import { useEffect, useState } from "react";
import { cookieService } from "../../utils/cookieService";

const ThemePreference = ({ onCookieChange }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = cookieService.get("theme");

        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        cookieService.set("theme", newTheme);

        onCookieChange();
    };

    return (
        <div
            className={`p-6 rounded-xl shadow ${theme === "dark"
                ? "bg-gray-900 text-white"
                : "bg-white text-black"
                }`}
        >
            <h2 className="text-xl font-bold mb-4">
                Theme Preference
            </h2>

            <div className="flex gap-3">
                <button
                    onClick={() => changeTheme("light")}
                    className="bg-yellow-400 px-4 py-2 rounded"
                >
                    Light
                </button>

                <button
                    onClick={() => changeTheme("dark")}
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    Dark
                </button>
            </div>

            <p className="mt-4">
                Current Theme: {theme}
            </p>
        </div>
    );
};

export default ThemePreference;