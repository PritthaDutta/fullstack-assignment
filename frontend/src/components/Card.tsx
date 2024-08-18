import React from 'react'
import { useParams } from 'react-router-dom';

const Card = () => {
    const { title } = useParams();
    const decodedTitle = title ? decodeURIComponent(title): "";
    
    return (
        <div className='w-100per h-341 p-t80 p-l20 p-r20 flex-c'>
            <h3>{decodedTitle}</h3>
            <h3>Description</h3>
        </div>
    )
}

export default Card