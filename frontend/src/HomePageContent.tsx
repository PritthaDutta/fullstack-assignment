import React from 'react'
import { CardProvider } from './context/card.provider'
import SearchSection from './components/SearchSection'
import CardSection from './components/CardSection'

const HomePageContent = () => {
    return (
        <CardProvider>
            <SearchSection />
            <CardSection />
        </CardProvider>
    )
}

export default HomePageContent