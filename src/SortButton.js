import React from 'react'

const Sort = (props) => {

    return (
        <div>
            <button onClick={props.handleClick} className='sort-button'>Ascending / Descending</button>
        </div>
    )
}

export default Sort