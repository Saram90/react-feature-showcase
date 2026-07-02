import { useEffect, useState } from "react";
import { cookieService } from "../../utils/cookieService";

const LanguagePreference = ({ onCookieChange }) => {
    const [language, setLanguage] = useState("English");

    useEffect(() => {
        const savedLanguage =
            cookieService.get("language");

        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const handleLanguageChange = (e) => {
        const lang = e.target.value;

        setLanguage(lang);
        cookieService.set("language", lang);

        onCookieChange();
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">
                Language Preference
            </h2>

            <select
                value={language}
                onChange={handleLanguageChange}
                className="border p-2 rounded"
            >
                <option>English</option>
                <option>Urdu</option>
                <option>French</option>
                <option>German</option>
            </select>

            <p className="mt-4">
                Selected Language: {language}
            </p>
        </div>
    );
};

export default LanguagePreference;