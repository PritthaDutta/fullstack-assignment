// CardContext.tsx
import React, { createContext, useState, useContext, ReactNode, SetStateAction, Dispatch } from 'react';

interface Item {
  id: number;
  title: string;
  description: string;
}

interface CardContextType {
  items: Item[];
  searchCard: (text: string)=>void;
}

const CardContext = createContext<CardContextType>({items: [], searchCard: ()=>{}});

export const CardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>(
    [
        { id: 1, title: 'Card 1', description: "Card 1 description. This is used for describing a specific card" },
        { id: 2, title: 'Card 2', description: "Card 2 description. This is used for describing a specific card" },
        { id: 3, title: 'Card 3', description: "Card 3 description. This is used for describing a specific card" },
        { id: 4, title: 'Card 4', description: "Card 4 description. This is used for describing a specific card" },
        { id: 5, title: 'Card 5', description: "Card 5 description. This is used for describing a specific card" },
        { id: 6, title: 'Card 6', description: "Card 6 description. This is used for describing a specific card" }
    ]
  );

  const searchCard = (searchText: string)=>{
      
  }

  return (
    <CardContext.Provider value={{ items, searchCard }}>
        {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
    const context = useContext(CardContext);
    if (context === undefined) {
        throw new Error('useCardContext must be used within a CardProvider');
    }
  return context;
};