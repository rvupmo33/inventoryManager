import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

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
import PantryAddItemBar from "../components/PantryAddItemBar";
import ItemTrackerBar from "../components/ItemTrackerBar";
import ListItem from "../components/ListItem";

function Grocery() {
  const [groceryList, setGroceryList] = useState([]);
  const groceryListRef = collection(db, "Grocery");

  const onListSubmit = async (itemName, category, quantity) => {
    try {
      await addDoc(groceryListRef, { itemName, category, quantity });
      const data = await getDocs(groceryListRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setGroceryList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const itemDoc = doc(db, "Grocery", id);
      await deleteDoc(itemDoc);
      const data = await getDocs(groceryListRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setGroceryList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  const changeQuantity = async (id, updatedQuantity) => {
    try {
      const itemDoc = doc(db, "Grocery", id);
      await updateDoc(itemDoc, { quantity: Number(updatedQuantity) });
      // Refresh the list after deletion
      const data = await getDocs(groceryListRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setGroceryList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getGroceryList = async () => {
      try {
        const data = await getDocs(groceryListRef);
        console.log(
          "Fetched data:",
          data.docs.map((doc) => doc.data())
        ); // Debugging line
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log("Filtered data:", filteredData); // Debugging line
        setGroceryList(filteredData);
      } catch (error) {
        console.log("Error fetching grocery list:", error);
      }
    };
    getGroceryList();
  }, []);

  return (
    <main>
      <br />
      <div className="pageIntroContainer">
        <ShoppingBasketIcon fontSize="small" sx={{ color: "#16a34a" }} />
        <h4 className="pageIntroH4">Build Up Your List Before Shopping Day</h4>
      </div>
      <PantryAddItemBar onListSubmit={onListSubmit} />
      <ItemTrackerBar />
      <div>
        {groceryList.map((grocery) => (
          <ListItem
            key={grocery.id}
            itemName={grocery.itemName}
            itemCategory={grocery.category}
            itemAmount={grocery.quantity}
            id={grocery.id}
            deleteItem={deleteItem}
            changeQuantity={changeQuantity}
          />
        ))}
      </div>
    </main>
  );
}

export default Grocery;
