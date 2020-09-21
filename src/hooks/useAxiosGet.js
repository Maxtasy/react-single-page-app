import { useState, useEffect } from 'react';
import axios from "axios";

export function useAxiosGet(url) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setResponse(response.data);
      })
      .catch(error => {
        setError("Something went wrong");
      });
  }, [url]);

  return { error, response }
}
