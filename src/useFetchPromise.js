import { useEffect, useState } from "react";

const useFetchPromise = (
  query,
  setItems,
  debounceWait,
  setSuggestionObject,
  suggestionObject
) => {
  console.log("re rendering");
  const [suggestions, setSuggestions] = useState([]);
  const controller = new AbortController();
  const signal = controller.signal;
  const fetchData = (query, controller) => {
    fetch(`https://swapi.dev/api/people/?search=${query}`, { signal: signal })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSuggestions(data?.results);
        setItems(data?.results);
        setSuggestionObject({ ...suggestionObject, [query]: data?.results });
      });
  };
  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
      setItems([]);
    }

    // debouncing happening after 2000ms
    else {
      let timer = setTimeout(() => {
        if (suggestionObject.hasOwnProperty(query)) {
          console.log(suggestionObject);
          setSuggestions(suggestionObject[query]);
          setItems(suggestionObject[query]);
          setSuggestionObject({
            ...suggestionObject,
            [query]: suggestionObject[query]
          });
          //  setItems(data?.results);
          // setSuggestionObject({ ...suggestionObject, [query]: data?.results })
        } else {
          fetchData(query, controller);
        }
      }, debounceWait);

      return () => {
        clearTimeout(timer);
        controller.abort();
      };
    }
  }, [query]);

  return suggestions;
};

export default useFetchPromise;
