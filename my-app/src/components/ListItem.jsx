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

  const [isEditing, setIsEditing] = useState(false);
  const [updatedQuantity, setUpdatedQuantity] = useState("");

  const handleDeleteItem = () => {
    deleteItem(id);
  };

  const toggleChangeInputs = () => {
    setIsEditing((prev) => !prev);
  };

  const handleUpdateItem = () => {
    if (updatedQuantity !== "") {
      changeQuantity(id, updatedQuantity);
      setUpdatedQuantity("");
      toggleChangeInputs();
    }
  };

  return (
    <div className="listItemContainer">
      <p>{itemName}</p>
      <div className="listRightSideContainer">
        <p style={{ backgroundColor: categoryColor }}>{itemCategory}</p>
        <p>Quantity: {itemAmount}</p>
        {isEditing ? (
          <>
            <input
              type="number"
              value={updatedQuantity}
              className="updateQuantity"
              onChange={(e) => setUpdatedQuantity(e.target.value)}
            />
            <button onClick={handleUpdateItem} className="editButton">
              Update
            </button>
          </>
        ) : null}
        <EditIcon onClick={toggleChangeInputs} />
        <DeleteIcon onClick={handleDeleteItem} />
      </div>
    </div>
  );
}

export default ListItem;
