// src/controllers/itemsController.ts
import { Request, Response } from 'express';
import Item from '../models/Items';

// Get all items
export const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create new item
export const createNewItem = async (req: Request, res: Response) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: 'Error creating item' });
  }
};
