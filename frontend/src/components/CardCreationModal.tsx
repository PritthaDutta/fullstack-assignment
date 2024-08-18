import React, { useState } from 'react'
import {TfiClose} from 'react-icons/tfi'
import { fetchData } from '../utils/helper';

interface CardSectionModalProps{
    closeAddCardModal: ()=>void
}

interface CardType{
    title: string;
    description: string
}

const CardCreationModal: React.FC<CardSectionModalProps> = ({closeAddCardModal}) => {
    const [card, setCard] = useState<CardType>({
        title: "",
        description: "",
    });

    const createCard = async()=>{
        const data = await fetchData("/api/cards", "POST", card);
        closeAddCardModal();
        window.location.reload();
    }

    return (
        <div className='w-100per h-fit overlay flex justify-center align-center'>
            <div className='bg-light flex-c r-gap w-400 md-w-450 sm-w-350 xsm-w-300 h-fit br-10 p-t20 p-b20 p-l20 p-r20 box-sh5 p-fixed z-index-3'>
                <div className='w-100per flex justify-sp align-center br-btm-gray'>
                    <h3>Create Card</h3>
                    <button className='w-30 h-30 flex justify-center align-center bg-transparent br-50 br-none outline-none fs-18 hover-bg-col-gray pointer' onClick={closeAddCardModal}><TfiClose /></button>
                </div>
                <div className='flex-c r-gap-pt50 w-100per'>
                    <label>Title</label>
                    <input type='text' value={card.title} className='br-none outline-none p-l10 h-35 br-10 br-f1' placeholder='title' onChange={(e)=>{setCard((prevCard)=>{return {...prevCard, title: e.target.value.trimStart()}})}}></input>
                </div>
                <div className='flex-c r-gap-pt50 w-100per'>
                    <label>Description</label>
                    <input type='text' value={card.description} className='br-none outline-none p-l10 h-60 br-10 br-f1' placeholder='description' onChange={(e)=>{setCard((prevCard)=>{return {...prevCard, description: e.target.value.trimStart()}})}}></input>
                </div>
                <div className='w-100per flex justify-flex-end'>
                    <button className='w-100 h-35 br-none outline-none fs-17 br-10 pointer' onClick={()=>{createCard()}}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default CardCreationModal