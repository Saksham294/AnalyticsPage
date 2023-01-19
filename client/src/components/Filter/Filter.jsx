import React from 'react'
import './Filter.css'

const Filter = ({filterName}) => {
    return (
        <div className='filter'>
            <div className="filterContainer">
                <div className="leftSide"></div>
                <div className="rightSide">
                    {filterName}
                </div>
            </div>
        </div>
    )
}

export default Filter
