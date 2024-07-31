//

import Inventory2Icon from "@mui/icons-material/Inventory2";
import AddIcon from "@mui/icons-material/Add";
import { Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function Home() {
  return (
    <div>
      <br />
      <div className="pageIntroContainer">
        <Inventory2Icon fontSize="small" sx={{ color: "#ca8a04" }} />
        <h4 className="pageIntroH4">Track Your Inventory to Stay Stocked</h4>
      </div>
      <div className="addTaskContainer">
        <TextField
          className="addTaskInput"
          id="outlined-basic"
          placeholder="Product Name"
          fullWidth
          variant="outlined"
          sx={{
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
              color: "white",
            },
          }}
        />

        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          // onChange={handleChange}
          sx={{
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        <TextField
          className="addTaskInput"
          id="outlined-basic"
          fullWidth
          variant="outlined"
          sx={{
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
