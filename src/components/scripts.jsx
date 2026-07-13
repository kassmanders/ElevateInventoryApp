import { collection, addDoc, updateDoc, increment, query, deleteDoc, doc, getDocs, where } from "firebase/firestore";
import { db } from "../services/firebase";


export async function addItem(item) {
  const InventoryRef = collection(db, "Inventory");
  
    console.log("Adding item...");
      try {
        const docRef = await checkItem(item.QRCode);
        // const docRef = await addDoc(InventoryRef, {
        //   Amount: Number(item.Amount) || 1,
        //   Categories: item.Categories || [],
        //   Description: item.Description || "", 
        //   Location: item.Location || "",
        //   Name: item.Name || "",
        //   QRCode: item.QRCode || "",
        //   UPC: item.UPC || "",
        // });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
          
  };
  
export async function  removeItem (id) {
  
    try {
      await deleteDoc(doc(db, "Inventory", id));
      console.log("Document successfully deleted!");
    }
    catch (e) {}
  };

  export async function incrementItemAmount (id, amount = 1) {
    const InventoryRef = doc(db, "Inventory", id);

    try {
      await updateDoc(InventoryRef, {
        Amount: increment(amount),
      });
      console.log("Item amount incremented by", amount);
    } catch (e) {
      console.error("Error incrementing item amount: ", e);
    }
  }

export async function checkItem (code) {
  const InventoryRef = collection(db, "Inventory");
  
    try {
      const q = query(InventoryRef, where("QRCode", "==", code));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const itemDoc = querySnapshot.docs[0];
        const itemData = { id: itemDoc.id, ...itemDoc.data() };
        console.log("Item found: ", itemData);
        return itemData;
      } else {
        console.log("No item found with the provided code.");
        return null;
      }
    
    }
    catch (e) {}
  };


  /* 
    (out) check UPC/Barcode or Personal QR
    (in) Found Item
    (out) Add to Inventory + edit
    (out) Remove from Inventory

    (in) Found Stage
    (out) Add Stage + edit
    (out) Remove Stage
    
    printer extension for QR code labels
  */