'use client'

import { AddItem } from "@/lib/actions/addItem";
import React from "react";

const handleAddItem = async(e)=>{
    e.preventDefault()
    await AddItem()
    
}

const page = () => {
  return (
    <div className="py-10 w-full max-w-xl space-y-4 mx-auto">
      <h1 className="text-3xl text-center ">Add item</h1>
      <form onSubmit={(e)=>handleAddItem(e)} className=" space-y-4 px-8 py-4 flex gap-4 justify-center items-center flex-col">
        <div className="flex gap-2 w-full">
          <label htmlFor="itemName" className="text-lg font-bold text-indigo-950 capitalize">Item Name</label >
          <input type="text" id="itemName" className="border-2 border-indigo-300 rounded-md px-2 py-1 flex-1" />
        </div>
        <div className="flex gap-2 w-full">
          <label className="text-lg font-bold text-indigo-950 capitalize" htmlFor="itemName">Description</label>
          <input type="text" id="itemName" className="border-2 border-indigo-300 rounded-md px-2 py-1 flex-1" />
        </div>
        <div className="flex gap-2 w-full">
          <label className="text-lg font-bold text-indigo-950 capitalize" htmlFor="cost">Cost of item</label>
          <input type="number" id="cost" className="border-2 border-indigo-300 rounded-md px-2 py-1 flex-1" />
        </div>
        <div className="flex gap-2 w-full">
          <label className="text-lg font-bold text-indigo-950 capitalize" htmlFor="size">Size of item</label>
          <input type="number" id="size" className="border-2 border-indigo-300 rounded-md px-2 py-1 flex-1"  />
        </div>
        <div className="flex gap-2 w-full">
          <label className="text-lg font-bold text-indigo-950 capitalize text-nowrap" htmlFor="file">photo of item</label>
          <input type="file" id="file" className="border-2 border-indigo-300 rounded-md px-2 py-1 " />
        </div>
        <button type="submit" className="bg-indigo-200 px-4 py-2 rounded-full cursor-pointer hover:bg-indigo-400">Add Item</button>
      </form>
    </div>
  );
};

export default page;
