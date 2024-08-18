import React, { useState } from 'react'
import CardCreationModal from './CardCreationModal';

const Navbar = () => {
    const [showAddCardModal, setShowAddCardModal] = useState(false);

    const toggleAddCardModal = ()=>{
        setShowAddCardModal(!showAddCardModal)
    }
    
    return (
        <>
        <div className='w-100per h-60 flex align-center justify-sp p-l60 p-r60 sm-p-left-right bg-dark p-fixed'>
            <div className='flex align-center'>
                <h3 className='light sm-fs-14'>Abstract | </h3>
                <h3 className='p-l5 gray-cloud sm-fs-14'>Help Center</h3>
            </div>
            <div>
                <button className='w-150 h-35 pointer br-none outline-none br-10 bg-glass light fs-15 sm-fs-14 sm-w-110' onClick={toggleAddCardModal}>Submit a Request</button>
            </div>
        </div>
        {showAddCardModal && <CardCreationModal closeAddCardModal = {toggleAddCardModal} />}
        </>
    )
}

export default Navbar