import React from 'react'

const Card = ({ coldestCity }) => {
    const { city_name, feels_like, grnd_level, humidity, pressure, sea_level, temp, temp_kf, temp_max, temp_min } = coldestCity
    return (
        <div style={{ maxWidth: 500, border: '1px solid red', padding: 20 }}>
            <h2>{city_name}</h2>
            <h1 style={{ marginTop: 10 }}>{temp}&deg;F</h1>
            <div style={{ marginTop: 10 }}>
                <SubInfo label={'Feels Like'} value={feels_like} unit={'\u00b0F'} />
                <SubInfo label={'Humidity'} value={humidity} unit={'%'} />
                <SubInfo label={'Pressure'} value={pressure} unit={'mb'} />
                <SubInfo label={'Ground Level'} value={grnd_level} unit={'m'} />
                <SubInfo label={'Sea Level'} value={sea_level} unit={'m'} />
                <SubInfo label={'Tempature KF'} value={temp_kf} unit={'\u00b0F'} />
                <SubInfo label={'Tempature Max'} value={temp_max} unit={'\u00b0F'} />
                <SubInfo label={'Tempature Min'} value={temp_min} unit={'\u00b0F'} />
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

export default Card
