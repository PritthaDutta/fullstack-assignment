import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useCardContext } from '../context/card.provider';

const SearchSection = () => {

    const [searchText, setSearchText] = useState<string>("");
    const { searchCard } = useCardContext();

    return (
        <div className = "w-100per h-400 bg-gray flex-c align-center justify-center r-gap">
            <h2 className='fs-50 sm-fs-30'>How can we help?</h2>
            <div className='flex align-center w-45per bg-light br-10 br-search-input br-gray p-r10'>
                <input type='search' value={searchText} className="w-90per lg-w-80per md-w-75per h- br-search-input br-none outline-none p-l20 p-r10 fs-18" placeholder='Search' onChange={(e) => setSearchText(e.target.value.trimStart())} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        searchCard(searchText);
                    }}}  
                />
                <button className="bg-glass light w-10per lg-w-20per md-w-25per h-40 flex align-center justify-center br-none outline-none br-search-icon pointer" onClick={()=>{searchCard(searchText)}}>
                    <FaArrowRight className='fs-16 dark' />
                </button>
            </div>
        </div>
    )
}

export default SearchSection