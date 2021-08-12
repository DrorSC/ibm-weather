import { Button, TextField } from '@material-ui/core'
import React from 'react'

const Search = ({ onSubmit, onChange, value }) => {
    return (
        <form onSubmit={onSubmit}>
            <div style={styles.searchContainer}>
                <TextField label="city,city,city..." value={value} style={{minWidth: 300}}
                    onChange={(e) => onChange(e.target.value)} />
                <Button variant="contained" color="primary" type="submit">
                    Apply
                </Button>
            </div>
        </form>
    )
}

const styles = {
    searchContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
}

export default Search
