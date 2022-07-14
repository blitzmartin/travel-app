import "./App.css";
import Tours from "./Tours";
import Loading from "./components/Loading.js";
import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours)
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className="App">
      {loading && <Loading />}
      <Tours tours={tours} />
    </div>
  );
}

export default App;
