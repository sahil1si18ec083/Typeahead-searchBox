import { useEffect, useState } from "react";
import useFetchPromise from "./useFetchPromise";

const SearchBox = ({
  id,
  name,
  label,
  placeholder,

  autoComplete,
  maxLimit,
  styles,
  debounceWait,
  listBox,
  noItemMessage,
  errorMessage,
  setItems,
  setSuggestionObject,
  suggestionObject
}) => {
  const [query, setQuery] = useState("");
  const suggestionList = useFetchPromise(
    query,
    setItems,
    debounceWait,
    setSuggestionObject,
    suggestionObject
  );

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex">
      <div>{name}</div>
      <input
        type={"text"}
        value={query}
        placeholder={placeholder}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
};

export default SearchBox;
