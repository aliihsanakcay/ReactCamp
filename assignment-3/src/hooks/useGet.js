import { useState } from "react";
import axios from 'axios';

export default function useGet() {
    const [responseData, setResponseData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const get = async (url) => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            setResponseData(response);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }

    };

    return { responseData, loading, error, get };
}
