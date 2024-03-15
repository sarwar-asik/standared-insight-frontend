import { useState, useEffect } from "react";

interface UseFetchDataProps {
  url: string;
  initialData?: any;
}

interface UseFetchDataResponse {
  data: any;
  loading: boolean;
  error: Error | null;
}

const useFetchData = ({
  url,
  initialData = null,
}: UseFetchDataProps): UseFetchDataResponse => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
