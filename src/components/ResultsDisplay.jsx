import { useSelector } from "react-redux";

const ResultsDisplay = () => {
  const { results, loading, error } = useSelector((state) => state.query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!results) return <p>No results yet.</p>;

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h3 className="font-bold">Query Result:</h3>
      <p>{results.data}</p>
    </div>
  );
};

export default ResultsDisplay;
