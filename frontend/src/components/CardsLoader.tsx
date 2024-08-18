import React from 'react'

const CardsLoader = () => {
    return (
        <div className='w-100per h-fit p-t100 p-b100 p-l300 p-r300 lg-p-left-right md-p-left-right sm-p-left-right flex align-center justift-center'>
            <div className='w-100per h-100per grid grid-row-gap-3 grid-col-gap-3 grid-cols-2 md-grid-colms-1 grid-center'>
                {[...Array(6)].map((index) => (
                    <div key={index} className='w-300 h-120 br-10 br-f1 glowing'>
                        <div className='w-100 h-40 br-btm bg-gray-1 box-sh'></div>
                        <div className='w-100 h-80 bg-gray-1 box-sh'></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardsLoader