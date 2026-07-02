import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import RememberMeLogin from "./RememberMeLogin";
import ThemePreference from "./ThemePreference";
import LanguagePreference from "./LanguagePreference";
import CookieList from "./CookieList";

const CookieDashboard = () => {

    const [cookies, setCookies] = useState({});

    const loadCookies = () => {
        setCookies(Cookies.get());
    };

    useEffect(() => {
        loadCookies();
    }, []);

    return (
        <div className="min-h-screen bg-slate-100 p-10">
            <h1 className="text-4xl font-bold mb-8">
                Cookies Examples 🍪
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                <RememberMeLogin onCookieChange={loadCookies} />
                <ThemePreference onCookieChange={loadCookies} />
                <LanguagePreference onCookieChange={loadCookies} />
            </div>

            <div className="mt-8">
                <CookieList cookies={cookies} />
            </div>

        </div>
    );
};

export default CookieDashboard;