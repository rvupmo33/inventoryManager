//

import Inventory2Icon from "@mui/icons-material/Inventory2";
import AddIcon from "@mui/icons-material/Add";
import { Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import AddItemBar from "./components/AddItemBar";
import ListItem from "./components/ListItem";
import ItemTrackerBar from "./components/ItemTrackerBar";

export default function Home() {
  return (
    <div>
      <br />
      <div className="pageIntroContainer">
        <Inventory2Icon fontSize="small" sx={{ color: "#ca8a04" }} />
        <h4 className="pageIntroH4">Track Your Inventory to Stay Stocked</h4>
      </div>
      <AddItemBar />
      <ItemTrackerBar />
      <ListItem />
    </div>
  );
}
