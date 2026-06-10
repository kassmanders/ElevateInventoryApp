import { addItem, removeItem, checkItem } from '../components/scripts';

function Inventory() {

  

  return (
    <div>
      <h2>Inventory</h2>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default Inventory;