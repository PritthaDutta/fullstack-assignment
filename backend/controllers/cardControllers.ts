import { Request, Response } from 'express';
import {Card} from '../models/Card'

export const getAllCards = async(req: Request, res: Response)=>{
    const { q } = req.query;
    try {
        let cards;
        if (q) {
            // If query is present, search for cards where the title or description contains the query string
            const searchQuery = { 
                $or: [
                    { title: { $regex: q, $options: 'i' } },   // Case-insensitive search for title
                    { description: { $regex: q, $options: 'i' } }  // Case-insensitive search for description
                ] 
            };
            cards = await Card.find(searchQuery);
        } else {
            // If no query is present, return all cards
            cards = await Card.find();
        }

        return res.status(200).json({success: true, cards});
    } catch (error) {
        console.error("Can't get Cards", error);
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
}

export const getCard = async(req: Request, res:Response)=>{
    const {title} = req.params;
    const decodedTitle = decodeURIComponent(title);

    try {
        const card = await Card.findOne({ title: { $regex: `^${decodedTitle}$`, $options: 'i' } });

        if (!card) {
            return res.status(404).json({ success: false, message: "Card not found" });
        }
        
        return res.status(200).json({ success: true, card });

    } catch (error) {
        console.error("Can't get Card", error);
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
}

export const createCard = async(req: Request, res: Response)=>{
    const {title, description} = req.body;

    try {
        const card = new Card({
            title,
            description
        })

        const newCard = await card.save();

        if (!newCard) {
            return res.status(404).json({ success: false, message: "Card can't be created" });
        }

        return res.status(200).json({success: true, newCard});
    } catch (error) {
        console.error("Can't create Card", error);
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
}