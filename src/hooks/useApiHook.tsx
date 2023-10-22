import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const useApiHook = <T,>(url: string, params?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse<T> = await axios.get(url, params);
        setData(response.data);
      } catch (error) {
        setError('Error getting the data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params, url]);

  return { data, loading, error };
};

export default useApiHook;
