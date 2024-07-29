import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((res) => {
                setData(res.rates);  // Set rates data
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setError(err);
                setLoading(false);
            });
    }, [baseCurrency]);

    return { data, loading, error };
}

export default useCurrencyInfo;
