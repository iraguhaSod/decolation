// filepath: c:\Users\HE DIDI IT\Documents\build\decor-web-app\src\models\Item.js
import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number, required: true },
  size: { type: Number, required: true },
  photo: { type: String, required: true }, // URL or file path
});

export default mongoose.models.Item || mongoose.model("Item", ItemSchema);