import React from 'react'

const GenericCard = ({ props }) => {
    console.log(props)
    return (
        <div style={{ maxWidth: 500, border: '1px solid red' }}>
            {Object.keys(props).map((val, index) => (
                <h4 key={index}>{val}: {props[val]}</h4>
            ))}
        </div>
    )
}

export default GenericCard
