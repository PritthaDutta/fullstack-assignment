import { Request, Response } from 'express';
import {Card} from '../models/Card'

export const getAllCards = async(req: Request, res: Response) => {
    const { q, page = '1', limit = '6' } = req.query;

    const decodedText = q ? decodeURIComponent(q as string) : "";
    const pageNumber = parseInt(page as string, 10);
    const limitNumber = parseInt(limit as string, 10);

    try {
        let query = {};
        if (decodedText) {
            query = { 
                $or: [
                    { title: { $regex: decodedText, $options: 'i' } },
                    { description: { $regex: decodedText, $options: 'i' } }
                ] 
            };
        }

        const totalCards = await Card.countDocuments(query);
        const totalPages = Math.ceil(totalCards / limitNumber);

        const cards = await Card.find(query)
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        return res.status(200).json({
            success: true,
            cards,
            currentPage: pageNumber,
            totalPages,
            hasMore: pageNumber < totalPages
        });
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