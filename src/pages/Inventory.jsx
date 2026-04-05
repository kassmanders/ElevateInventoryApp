import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

function Inventory() {

  

  return (
    <div>
      <h2>Inventory</h2>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default Inventory;