const CookieList = ({ cookies }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">
                All Cookies
            </h2>

            {Object.keys(cookies ?? {}).length === 0 ? (
                <p>No cookies found</p>
            ) : (
                <table className="w-full border">
                    <thead>
                        <tr>
                            <th className="border p-2">
                                Cookie Name
                            </th>

                            <th className="border p-2">
                                Value
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {Object.entries(cookies).map(
                            ([name, value]) => (
                                <tr key={name}>
                                    <td className="border p-2">
                                        {name}
                                    </td>

                                    <td className="border p-2">
                                        {value}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CookieList;