import React from 'react'
import { KelvinToCelsius } from '../Utils'

const Card = ({ coldestCity, celsiusMode }) => {
    const { city_name, feels_like, grnd_level, humidity, pressure, sea_level, temp, temp_kf, temp_max, temp_min } = coldestCity
    const tempUnit = celsiusMode ? '\u00b0C' : 'K'
    return (
        <div style={styles.cardContainer}>
            <div>
                <h2>{city_name}</h2>
                <h1 style={{ marginTop: 10 }}>{celsiusMode ? KelvinToCelsius(temp).toFixed(0) : temp.toFixed(0)}{tempUnit}</h1>
            </div>
            <div>
                <div style={{ marginTop: 10 }}>
                    <SubInfo label={'Feels Like'} value={feels_like} unit={tempUnit} />
                    <SubInfo label={'Humidity'} value={humidity} unit={'%'} />
                    <SubInfo label={'Pressure'} value={pressure} unit={'mb'} />
                    <SubInfo label={'Ground Level'} value={grnd_level} unit={'m'} />
                    <SubInfo label={'Sea Level'} value={sea_level} unit={'m'} />
                    <SubInfo label={'Tempature KF'} value={celsiusMode ? KelvinToCelsius(temp_kf).toFixed(0) : temp_kf.toFixed(0)} unit={tempUnit} />
                    <SubInfo label={'Tempature Max'} value={celsiusMode ? KelvinToCelsius(temp_max).toFixed(0) : temp_max.toFixed(0)} unit={tempUnit} />
                    <SubInfo label={'Tempature Min'} value={celsiusMode ? KelvinToCelsius(temp_min).toFixed(0) : temp_min.toFixed(0)} unit={tempUnit} />
                </div>
            </div>
        </div>
    )
}

const SubInfo = ({ label, value, unit }) => {
    return (
        <div className='sub-info'>
            <label>{label}: </label>
            <span>{value}{unit}</span>
        </div>
    )
}

const styles = {
    cardContainer: {
        maxWidth: 500,
        padding: 20,
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }
}

export default Card
