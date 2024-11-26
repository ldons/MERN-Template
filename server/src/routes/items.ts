// src/routes/items.ts
import express from 'express';
import { getAllItems, createNewItem } from '../controllers/itemsController';

const router = express.Router();

// Get all items
router.get('/items/', getAllItems);

// Create new item
router.post('/items/', createNewItem);

export default router;
