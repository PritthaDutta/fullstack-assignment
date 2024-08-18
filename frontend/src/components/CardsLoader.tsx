import React from 'react'

const CardsLoader = () => {
    return (
        <div className='w-100per h-fit p-t100 p-b100 p-l300 p-r300 lg-p-left-right md-p-left-right sm-p-left-right flex align-center justift-center'>
            <div className='w-100per h-100per grid grid-row-gap-3 grid-col-gap-3 grid-cols-2 md-grid-colms-1 grid-center'>
                {[...Array(6)].map((_,index) => (
                    <div key={index} className='w-300 h-120 br-10 br-f1 box-sh glowing'>
                        <div className='w-100per h-40 br-btm'></div>
                        <div className='w-100per h-80'></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardsLoader