//
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { colorMapping } from "../data/ColorMap";
import { useState } from "react";

function ListItem({
  itemName,
  itemCategory,
  itemAmount,
  id,
  deleteItem,
  changeQuantity,
}) {
  const categoryColor = colorMapping[itemCategory] || "gray";

  const [updatedQuantity, setUpdatedQuantity] = useState("");

  const handleDeleteItem = () => {
    deleteItem(id);
  };

  const toggleChangeInputs = () => {
    const updateInput = document.getElementById("updateQuantity");
    const updateBtn = document.getElementById("updateQuantityBtn");
    console.log(updateBtn);
    if (updateBtn.classList.contains("hidden")) {
      updateBtn.classList.remove("hidden");
      updateInput.classList.remove("hidden");
      console.log("Button is now visible.");
    } else {
      updateBtn.classList.add("hidden");
      updateInput.classList.add("hidden");
      console.log("Button is now hidden.");
    }
  };

  const handleUpdateItem = () => {
    if (updatedQuantity !== "") {
      changeQuantity(id, updatedQuantity);
      setUpdatedQuantity("");
      toggleChangeInputs();
    }
  };

  return (
    <>
      <div className="listItemContainer">
        <p>{itemName}</p>
        <div className="listRightSideContainer">
          <p style={{ backgroundColor: categoryColor }}>{itemCategory}</p>
          <p>Quantity: {itemAmount}</p>
          <input
            type="number"
            id="updateQuantity"
            className="hidden"
            onChange={(e) => setUpdatedQuantity(e.target.value)}
          />
          <button
            id="updateQuantityBtn"
            className="hidden"
            onClick={handleUpdateItem}
          >
            Update
          </button>
          <EditIcon onClick={toggleChangeInputs} />
          <DeleteIcon onClick={handleDeleteItem} />
        </div>
      </div>
    </>
  );
}

export default ListItem;
