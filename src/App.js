import { useQuery } from "@apollo/client";
import { GET_DOCUMENT } from "./queries/getDocument";
import { Route, Routes } from "react-router-dom";
import Document from "./routes/Document";
import Artboard from "./routes/Artboard";
import { useEffect } from "react";
import { documentActions } from "./store/document-slice";
import { useDispatch } from "react-redux";

function App() {
  const { loading, data } = useQuery(GET_DOCUMENT);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(
        documentActions.setDocument({
          name: data?.share?.version?.document?.name,
          artboards: data?.share?.version?.document?.artboards?.entries,
        })
      );
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;

  return (
    <Routes>
      <Route path="/" element={<Document />} />
      <Route path="/:image" element={<Artboard />} />
    </Routes>
  );
}

export default App;
