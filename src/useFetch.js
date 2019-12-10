import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(search).then(result => {
      setData(result.data);
      setIsLoading(false);
    });
  }, [search]);

  return [{ data, isLoading }, setSearch];
}
