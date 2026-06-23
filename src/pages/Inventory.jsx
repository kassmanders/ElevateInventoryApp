import { useState } from 'react';
import { addItem, removeItem, checkItem } from '../components/scripts';

function Inventory() {
  
  const emptyItem = {
    Name: "",
    Description: "",
    Categories: "",
    Location: "",
    Amount: 1,
    QRCode: "",
    UPC: "",
  };
  
  const [item, setItem] = useState(emptyItem);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setItem({
      ...item,
      [name]: value,
    });
  };
  

  const handleAddItem = async () => {
    await addItem({
      ...item,
      Amount: Number(item.Amount),
      Categories: item.Categories
        .split(",")
        .map((category) => category.trim())
        .filter((category) => category !== ""), 
      
      });

    setItem(emptyItem);
  };

  return (
    <div>
      <h2>Inventory</h2>

      <input
        name="Name"
        placeholder="Item name"
        value={item.Name}
        onChange={handleChange}
      />

      <input
        name="Description"
        placeholder="Item description"
        value={item.Description}
        onChange={handleChange}
      />

      <input
        name="Categories"
        placeholder="Categories (comma separated)"
        value={item.Categories}
        onChange={handleChange}
      />

      <input
        name="Location"
        placeholder="Location"
        value={item.Location}
        onChange={handleChange}
      />

      <input
        name="Amount"
        type="number"
        placeholder="Amount"
        value={item.Amount}
        onChange={handleChange}
      />

      <input
        name="QRCode"
        placeholder="QR Code"
        value={item.QRCode}
        onChange={handleChange}
      />  

      <input
        name="UPC"
        placeholder="UPC"
        value={item.UPC}
        onChange={handleChange}
      />

      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default Inventory;