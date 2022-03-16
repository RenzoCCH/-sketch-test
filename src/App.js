import { useQuery } from "@apollo/client";
import { GET_DOCUMENT } from "./queries/getDocument";

function App() {
  const { loading, data } = useQuery(GET_DOCUMENT);
  if (loading) return <p>Loading...</p>;
  return <div className="App">
    the app
  </div>;
}

export default App;
