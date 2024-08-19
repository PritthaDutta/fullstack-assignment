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
  hasMore: boolean;
  handleReadMore: ()=>void
}

const CardContext = createContext<CardContextType>({items: [], searchCard: ()=>{}, loading: false, hasMore: false, handleReadMore: ()=>{}});

export const CardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  useEffect(()=>{
    fetchCards();
  },[])

  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchCards = async(searchText?: string, page: number = 1) => {
      let uri = `/api/cards?page=${page}&limit=6`
      setLoading(true);
      if(searchText) uri += `&q=${encodeURIComponent(searchText)}`
      const data = await fetchData(uri, "GET");
      setLoading(false);
      if (page === 1) {
          setItems(data?.cards);
      } else {
          setItems(prev => [...prev, ...data?.cards]);
      }
      setCurrentPage(data?.currentPage);
      setHasMore(data?.hasMore);
  }
  
  const searchCard = async(searchText: string) => {
    if(searchText) {
        setCurrentPage(1);
        await fetchCards(searchText, 1);
    }
  }
  
  const handleReadMore = () => {
    fetchCards(undefined, currentPage + 1);
  }

  return (
    <CardContext.Provider value={{ items, searchCard, loading, hasMore, handleReadMore }}>
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