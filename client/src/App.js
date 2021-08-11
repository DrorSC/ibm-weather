import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const [coldestCity, setColdestCity] = useState({})

  useEffect(() => {
    const getDefaultColdestCity = async () => {
      setLoading(true)
      const defaultColdestCity = await fetchColdestCity()
      setColdestCity(defaultColdestCity)
      setLoading(false)
    }

    getDefaultColdestCity()
  }, [])

  // Fetch ColdestCity
  const fetchColdestCity = async () => {
    const res = await fetch('http://localhost:5000/lowest-temp-city')
    const data = await res.json()

    return data
  }

  return (
    <div className="App">
      <Header />

      <div style={{ height: '100%', border: '1px solid blue' }}>
        {coldestCity ?
          Object.keys(coldestCity).map((val, k) => (
            <>
              <h4 k={k}>{val}: {coldestCity[val]}</h4>
            </>
          ))
          :
          <ClipLoader loading={loading} size={150} />
        }
      </div>

      <Footer />
    </div>
  );
}

export default App;
