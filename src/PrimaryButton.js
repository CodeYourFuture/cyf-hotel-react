import React from 'react'


const PrimaryButton = (props) => {

    return (
        <div className="primary-button">
            <button className="btn btn-primary">
                {props.buttonText}
            </button>
        </div>
    )
}

export default PrimaryButton
