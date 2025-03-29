import { Provider } from "react-redux";
import { store } from "./redux/store";
import QueryInput from "./components/QueryInput";
import ResultsDisplay from "./components/ResultsDisplay";
import Navbar from "./components/Bar";
import QueryHistory from "./components/QueryHistory"; // Imported QueryHistory component
import About from "./components/About"; // Ensure About is a separate component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => (
  <div className="max-w-4xl w-full bg-white p-8 shadow-2xl rounded-lg text-center text-black border border-gray-300">
    <h1 className="text-3xl font-bold mb-6">How can I assist you today?</h1>
    <QueryInput />
    <ResultsDisplay />
  </div>
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100 text-black">
          <Navbar />
          <div className="flex flex-col items-center justify-center flex-grow p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/history" element={<QueryHistory />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
