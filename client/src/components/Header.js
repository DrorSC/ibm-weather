import React, { useState } from 'react'
import Switch from '@material-ui/core/Switch';

const Header = ({ celsiusMode, toggle }) => {

    return (
        <header style={styles.headerContainer}>
            <h1>IBM Coldest Weather App</h1>
            <div style={styles.celSwitch}>
                <span>Celcius Mode:</span>
                <Switch
                    checked={celsiusMode}
                    onChange={toggle}
                />
                {/* <span>{'\u00b0F'}F</span>
                <span>{'\u00b0F'}C</span> */}
            </div>
        </header>
    )
}

const styles = {
    headerContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 10px'
    },
    celSwitch: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Header
