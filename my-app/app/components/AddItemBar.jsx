//

"use client";

import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

function AddTaskBar() {
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("fruits");

  const addToQuantity = () => {
    if (quantity < 1000) {
      setQuantity(quantity + 1);
    }
  };

  const removeFromQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const changeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="addTaskContainer">
      <input type="text" id="inputField" placeholder="Item Name..." />
      <div className="rightTaskSideContainer">
        <div className="quantityContainer">
          <button id="subtractFromQuantityBtn" onClick={removeFromQuantity}>
            -
          </button>
          <input
            type="number"
            placeholder="1"
            value={quantity}
            id="quantityField"
            min={1}
            max={1000}
            disabled
          />
          <button id="addToQuantityBtn" onClick={addToQuantity}>
            +
          </button>
        </div>
        <Select
          value={category}
          onChange={changeCategory}
          displayEmpty
          sx={{
            backgroundColor: "#f4f4f4",
            border: "1px solid #3f3f46",
            borderRadius: "5px",
            height: "30px",
            padding: "0px 10px",
            fontSize: "15px",
            ".MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              padding: "0px",
            },
            ".MuiSelect-icon": {
              color: "#3f3f46",
            },
          }}
        >
          <MenuItem value="" disabled>
            Select Category
          </MenuItem>
          <MenuItem value="fruits">Fruits</MenuItem>
          <MenuItem value="vegetables">Vegetables</MenuItem>
          <MenuItem value="canned">Canned Goods</MenuItem>
          <MenuItem value="dairy">Dairy</MenuItem>
          <MenuItem value="meat">Meat</MenuItem>
          <MenuItem value="seafood">Seafood</MenuItem>
          <MenuItem value="condiments">Condiments</MenuItem>
          <MenuItem value="snacks">Snacks</MenuItem>
          <MenuItem value="bakery">Bakery</MenuItem>
          <MenuItem value="beverages">Beverages</MenuItem>
          <MenuItem value="baking">Baking</MenuItem>
          <MenuItem value="frozen">Frozen</MenuItem>
          <MenuItem value="personal">Personal</MenuItem>
          <MenuItem value="supplies">Supplies</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
        <button id="addItemToListBtn">Add To List</button>
      </div>
    </div>
  );
}

export default AddTaskBar;
