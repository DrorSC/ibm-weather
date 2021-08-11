import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ClockLoader from "react-spinners/ClockLoader";
import Card from './components/Card';

const API_URL = "http://localhost:5000/";
const DEFAULT_CITIES = 'tel aviv,berlin,budapest';

function App() {
  const [loading, setLoading] = useState(false)
  const [cities, setCities] = useState(DEFAULT_CITIES)
  const [coldestCity, setColdestCity] = useState(null)

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
    const res = await fetch(`${API_URL}lowest-temp-city?cities=${DEFAULT_CITIES}`)
    const data = await res.json()

    return data
  }

  const onSubmit = () => {

  }

  return (
    <div className="App">
      <Header />

      <div style={{ height: '100%' }}>
        <form onSubmit={onSubmit}>
          <div style={{ border: '1px solid pink', padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <label>Cities to check: </label>
            <input type='text' placeholder='City,City,City...' value={cities}
              onChange={(e) => setCities(e.target.value)} />
            <input type='submit' className='btn' value='Find The Coldest' style={{ width: 100, whiteSpace: 'normal' }} />
          </div>
        </form>

        <div style={{ border: '1px solid blue', padding: 30 }}>
          {coldestCity ?
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Card coldestCity={coldestCity} />
            </div>
            :
            <ClockLoader loading={loading} size={100} css={'display: inline-block'} color={'rgb(54, 215, 183)'} />
          }
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
