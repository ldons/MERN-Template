import express from 'express';
import { getAllItems, createNewItem, updateItem, deleteItem } from '../controllers/ItemsController';

const router = express.Router();

// Get all items
router.get('/items', getAllItems);

// Create new item
router.post('/items/', createNewItem);

// Update an item
router.put('/items/:id', updateItem);

// Delete an item
router.delete('/items/:id', deleteItem);

export default router;
