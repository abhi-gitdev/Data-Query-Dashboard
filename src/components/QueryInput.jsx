import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery, setResults, setError } from "../redux/querySlice";

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!query) return;
    dispatch(submitQuery());

    // Simulate AI response
    setTimeout(() => {
      if (query.toLowerCase().includes("sales")) {
        dispatch(setResults({ query, data: "Sales increased by 15%" }));
      } else if (query.toLowerCase().includes("revenue")) {
        dispatch(setResults({ query, data: "Revenue grew by 20% in Q1" }));
      } else {
        dispatch(setError("No data found"));
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto mt-4">
      <input
        type="text"
        placeholder="Enter your query..."
        className="w-full p-3 border border-gray-300 rounded-lg text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="mt-2 text-gray-500 text-sm">
        Try searching: <span className="font-semibold">"sales"</span>
      </p>
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-black text-white rounded-lg shadow-md 
             hover:bg-gray-800 transition duration-300 
             active:scale-95 
             relative overflow-hidden before:absolute before:inset-0 
             before:bg-white before:opacity-0 before:scale-50 
             before:transition-all before:duration-500 before:rounded-lg 
             hover:before:opacity-10 hover:before:scale-100"
      >
        Search
      </button>
    </div>
  );
};

export default QueryInput;
