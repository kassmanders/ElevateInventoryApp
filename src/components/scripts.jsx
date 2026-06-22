import { collection, addDoc, deleteDoc, doc, getDocs, where } from "firebase/firestore";
import { db } from "../services/firebase";


export async function addItem(item) {
  
    console.log("Adding item...");
      try {
        const docRef = await checkItem(item.QRCode);
        // const docRef = await addDoc(collection(db, "Inventory"), {
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
  
export async function checkItem () {
  
    try {
      const querySnapshot = await getDocs(collection(db, "Inventory")/*, where("QR Code", "==", code)*/);
      if (!querySnapshot.empty) {
        const itemData = querySnapshot.docs[0].data();
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