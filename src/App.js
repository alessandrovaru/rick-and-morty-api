import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [state, setState] = useState({
    info: [],
    results: [],
  });

  const [loading, setLoading] = useState({
    loading: true,
    error: null,
  });

  const [page, setNext] = useState({
    netxPage: 1,
  });

  const fetchCharacters = async () => {
    setLoading({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page.netxPage}`
      );
      const data = await response.json();
      console.log(data);
      setState({
        info: data.info,
        results: [].concat(state.results, data.results),
      });
      setLoading({ loading: false, error: null });
      setNext({
        netxPage: page.netxPage + 1,
      });
    } catch (error) {
      setLoading({ loading: false, error: true });
      console.log("error");
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <Layout />
      <Card data={state.results} error={loading.error} />
      {loading.loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <button onClick={fetchCharacters} className="btn btn-success">
            Load More
          </button>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
