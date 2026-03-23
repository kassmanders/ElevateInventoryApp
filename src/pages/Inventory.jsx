import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

function Inventory() {

  const addItem = async () => {
    try {
      await addDoc(collection(db, "Inventory"), {
        name: "Test Chair",
        category: "Furniture",
        inInventory: true,
        createdAt: new Date()
      });
      console.log("Item added!");
    } catch (e) {
      console.error("Error adding item: ", e);
    }
  };

  return (
    <div>
      <h2>Inventory</h2>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default Inventory;