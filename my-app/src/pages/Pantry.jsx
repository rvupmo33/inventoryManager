import Inventory2Icon from "@mui/icons-material/Inventory2";
import PantryAddItemBar from "../components/PantryAddItemBar";
import ListItem from "../components/ListItem";
import ItemTrackerBar from "../components/ItemTrackerBar";

import { db } from "../firebase-config";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

function Pantry() {
  const [pantryList, setPantryList] = useState([]);
  const pantryListRef = collection(db, "Items");

  const onListSubmit = async (itemName, category, quantity) => {
    try {
      await addDoc(pantryListRef, { itemName, category, quantity });
      const data = await getDocs(pantryListRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPantryList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const itemDoc = doc(db, "Items", id);
      await deleteDoc(itemDoc);
      // Refresh the list after deletion
      const data = await getDocs(pantryListRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPantryList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  const changeQuantity = async (id, updatedQuantity) => {
    try {
      const itemDoc = doc(db, "Items", id);
      await updateDoc(itemDoc, { quantity: Number(updatedQuantity) });
      // Refresh the list after deletion
      const data = await getDocs(pantryListRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPantryList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getPantryList = async () => {
      // read data
      try {
        const data = await getDocs(pantryListRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPantryList(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    getPantryList();
  }, []);

  return (
    <>
      <br />
      <div className="pageIntroContainer">
        <Inventory2Icon fontSize="small" sx={{ color: "#ca8a04" }} />
        <h4 className="pageIntroH4">Track Your Inventory to Stay Stocked</h4>
      </div>
      <PantryAddItemBar onListSubmit={onListSubmit} />
      <ItemTrackerBar />
      <div>
        {pantryList.map((item) => (
          <ListItem
            key={item.id}
            itemName={item.itemName}
            itemCategory={item.category}
            itemAmount={item.quantity}
            id={item.id}
            deleteItem={deleteItem}
            changeQuantity={changeQuantity}
          />
        ))}
      </div>
    </>
  );
}

export default Pantry;
