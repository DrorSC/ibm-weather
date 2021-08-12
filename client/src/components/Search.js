import React from 'react'

const Search = ({ onSubmit, onChange, value }) => {
    return (
        <form onSubmit={onSubmit}>
            <div style={styles.searchContainer}>
                <label>Cities to check: </label>
                <input type='text' placeholder='City,City,City...' value={value}
                    onChange={(e) => onChange(e.target.value)} />
                <input type='submit' className='btn' value='Find The Coldest' style={styles.button} />
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
    },
    button: {
        width: 100,
        whiteSpace: 'normal'
    }
}

export default Search
