import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

function Inventory() {

  const addItem = async () => {
  
      try {
        const docRef = await addDoc(collection(db, "Inventory"), {
          Amount: 1,
          Categories: [],
          Description: "Item description", 
          Location: "",
          Name: "",
          QRCode: "unique-code-123",
          UPC: "",
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
          
  };
  
  const removeItem = async (id) => {
  
    try {
      await deleteDoc(doc(db, "Inventory", id));
      console.log("Document successfully deleted!");
    }
    catch (e) {}
  };
  
  const checkItem = async (code) => {
  
    try {
      const querySnapshot = await getDocs(collection(db, "Inventory"), where("QR Code", "==", code));
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
  
  

}



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