import SearchBox from "./SearchBox";
import { useState } from "react";
import ListBox from "./ListBox";

export default function App() {
  const [items, setItems] = useState([]);
  const [suggestionObject, setSuggestionObject] = useState({});
  console.log(suggestionObject);
  console.log(items);
  return (
    <>
      <div className="App">
        <SearchBox
          id="personName"
          name="Enter person's name"
          label={"Enter person's name "}
          placeholder={"Search"}
          autoComplete={true}
          maxLimit={5}
          styles={{
            label: "",
            input: ""
          }}
          debounceWait={400}
          listBox={items}
          noItemMessage={"Sorry no person found"}
          errorMessage={"Something went wrong"}
          setItems={setItems}
          setSuggestionObject={setSuggestionObject}
          suggestionObject={suggestionObject}
        />
        <ListBox items={items} activeIndex={0} />
      </div>
    </>
  );
}
