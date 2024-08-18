import React from 'react'
import { useCardContext } from "../context/card.provider"
import { useNavigate } from 'react-router-dom';

interface Item{
    id: number;
    title: string;
    description: string;
}

const CardSection = () => {
    const { items } = useCardContext(); 

    const navigate = useNavigate();

    const handleClickOnCard = (title: string)=>{
        const encodedTitle = encodeURIComponent(title);
        navigate(`/card/${encodedTitle}`);
    }

    return (
        <div className='w-100per h-fit p-t100 p-b100 p-l300 p-r300 lg-p-left-right md-p-left-right sm-p-left-right flex align-center justift-center'>
            <div className='w-100per h-100per grid grid-row-gap-3 grid-col-gap-3 grid-cols-2 md-grid-colms-1 grid-center'>
                {items.map((data, index) => (
                    <div key={index} className='w-300 h-120 br-10 br-f1 pointer' onClick={()=>{handleClickOnCard(data.title)}}>
                        <h3 className='fs-18 p-t10 p-b5 p-l10 p-r10 br-btm w-100per t-overflow-ellipsis overflow-hidden white-sp-nowrap'>{data.title}</h3>
                        <h3 className='gray fs-15 p-l10 p-r10 p-t5 p-b10'>{data.description}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardSection