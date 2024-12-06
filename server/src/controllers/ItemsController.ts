import { Request, RequestHandler, Response } from 'express';
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

// Update an item
export const updateItem: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedItem) {
      res.status(404).json({ message: 'Item not found' });
      return; // Chiude il flusso senza restituire un valore
    }

    res.json(updatedItem); // Invia la risposta senza restituire il valore
  } catch (error) {
    res.status(400).json({ message: 'Error updating item' });
  }
};

// Delete an item
export const deleteItem: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      res.status(404).json({ message: 'Item not found' });
      return; // Chiude il flusso senza restituire un valore
    }

    res.json({ message: 'Item deleted successfully', item: deletedItem });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item' });
  }
};
