import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/helper';
import { Item } from '../context/card.provider';

const Card = () => {
    const { title } = useParams();
    const decodedTitle = title ? decodeURIComponent(title): "";

    const [cardDetails, setCardDetails] = useState<Item | undefined>(undefined);

    useEffect(() => {
        fetchCard();
    }, [decodedTitle])
    
    
    const fetchCard = async()=>{
        let uri = `/api/cards/${encodeURIComponent(decodedTitle)}`

        const data = await fetchData(uri, "GET");
        setCardDetails(data?.card?? undefined)
    }
    
    return (
        <div className='w-100per h-341 p-t80 p-l20 p-r20 flex-c'>
            <h3>{cardDetails?.title}</h3>
            <h3>{cardDetails?.description}</h3>
        </div>
    )
}

export default Card