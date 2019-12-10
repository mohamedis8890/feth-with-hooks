import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "LOADING_START":
      return { ...state, isLoading: true };

    case "LOADING_END":
      return { ...state, isLoading: false };

    case "FETCH_COMPLETE":
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export default function useFetch(initialUrl, initialData) {
  const [search, setSearch] = useState(initialUrl);

  const [state, dispatch] = useReducer(fetchReducer, {
    data: initialData,
    search: initialUrl,
    isLoading: false
  });

  useEffect(() => {
    dispatch({ type: "LOADING_START" });

    axios.get(search).then(result => {
      dispatch({ type: "FETCH_COMPLETE", payload: result.data });
      dispatch({ type: "LOADING_END" });
    });
  }, [search]);

  return [state, setSearch];
}
