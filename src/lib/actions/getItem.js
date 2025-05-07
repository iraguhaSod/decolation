'use server';


import { connectToDatabase } from "../database";
import Item from "../model/Item";

export async function getAllItem() {
  try {
    // Connect to the database
    const db = await connectToDatabase();

    // Create a new item document
   

    // Save the item to the database
    const item = await Item.find({});

    console.log('Item added successfully:', item);
    return JSON.parse(JSON.stringify(item));
  } catch (error) {
    console.error('Error adding item:', error);
    return { success: false, error: error.message };
  }
}