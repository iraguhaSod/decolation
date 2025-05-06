'use server';


import { connectToDatabase } from "../database";
import Item from "../model/Item";

export async function AddItem(itemData) {
  try {
    // Connect to the database
    const db = await connectToDatabase();

    // Create a new item document
    const newItem = new Item({
      name: itemData.name,
      description: itemData.description,
      cost: itemData.cost,
      size: itemData.size,
      photo: itemData.photo, // Assuming photo is a URL or file path
    });

    // Save the item to the database
    const savedItem = await newItem.save();

    console.log('Item added successfully:', savedItem);
    return { success: true };
  } catch (error) {
    console.error('Error adding item:', error);
    return { success: false, error: error.message };
  }
}