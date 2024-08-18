// CardContext.tsx
import React, { createContext, useState, useContext, ReactNode, SetStateAction, Dispatch, useEffect } from 'react';
import { fetchData } from '../utils/helper';

export interface Item {
  id: number;
  title: string;
  description: string;
}

interface CardContextType {
  items: Item[];
  searchCard: (text: string)=>void;
  loading: boolean;
}

const CardContext = createContext<CardContextType>({items: [], searchCard: ()=>{}, loading: false});

export const CardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  useEffect(()=>{
    fetchCards();
  },[])

  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCards = async(searchText?: string )=>{
      let uri = `/api/cards`

      setLoading(true);
      if(searchText) uri = `/api/cards/?q=${encodeURIComponent(searchText)}`
      const data = await fetchData(uri, "GET");
      setLoading(false);
      setItems(data?.cards)
  }
  
  const searchCard = async(searchText: string)=>{
    if(searchText)  
      await fetchCards(searchText)
  }

  return (
    <CardContext.Provider value={{ items, searchCard, loading }}>
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