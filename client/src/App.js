import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ClockLoader from "react-spinners/ClockLoader";
import Card from './components/Card';
import Search from './components/Search';

import Background from './assets/cold-weather.jpeg';

const API_URL = "http://localhost:5000/";
const DEFAULT_CITIES = 'tel aviv,berlin,budapest';

function App() {
  const [loading, setLoading] = useState(false)
  const [cities, setCities] = useState(DEFAULT_CITIES)
  const [coldestCity, setColdestCity] = useState(null)
  const [celsiusMode, setCelsiusMode] = useState(false)

  useEffect(() => {
    const getDefaultColdestCity = async () => {
      const defaultColdestCity = await fetchColdestCity(DEFAULT_CITIES)
      setColdestCity(defaultColdestCity)
    }
    getDefaultColdestCity()
  }, [])

  // Fetch ColdestCity
  const fetchColdestCity = async (citiesString) => {
    setLoading(true)
    const res = await fetch(`${API_URL}lowest-temp-city?cities=${citiesString}`)
    // const res = await fetch(`${process.env.API_URL}lowest-temp-city?cities=${citiesString}`)
    setLoading(false)
    const data = await res.json()
    return data
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const coldestCity = await fetchColdestCity(cities)
    setColdestCity(coldestCity)
  }

  const toggleCelsiusMode = () => {
    setCelsiusMode(!celsiusMode)
  }

  return (
    <div className="App" style={styles.appContainer}>
      <Header celsiusMode={celsiusMode} toggle={toggleCelsiusMode} />
      <div style={styles.mainContent}>
        <Search onSubmit={onSubmit} onChange={setCities} value={cities} />
        <div style={{ padding: 30 }}>
          {coldestCity && !loading ?
            <Card coldestCity={coldestCity} celsiusMode={celsiusMode} />
            :
            <ClockLoader loading={loading} size={100} css={'display: inline-block'} color={'rgb(54, 215, 183)'} />
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  appContainer: {
    background: `url(${Background})`,
    height: '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  mainContent: {
    height: '100%',
  }
}

export default App;
