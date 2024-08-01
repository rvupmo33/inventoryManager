//
"use client";

import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

function ItemTrackerBar() {
  const [sortBy, setSortBy] = useState("Oldest");
  return (
    <div className="trackerBarContainer">
      <p>
        <span style={{ color: "orange", fontWeight: "700" }}>All</span> - 2
        items
      </p>
      <Select
        value={sortBy}
        // onChange={changeCategory}
        displayEmpty
        sx={{
          backgroundColor: "#f4f4f4",
          border: "1px solid #3f3f46",
          borderRadius: "5px",
          height: "25px",
          padding: "0px 10px",
          fontSize: "10px",
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
          SortBy
        </MenuItem>
        <MenuItem value="Oldest">Oldest</MenuItem>
        <MenuItem value="Newest">Newest</MenuItem>
      </Select>
    </div>
  );
}

export default ItemTrackerBar;
