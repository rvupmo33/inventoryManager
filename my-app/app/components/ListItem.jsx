//
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ListItem() {
  return (
    <>
      <div className="listItemContainer">
        <p>ItemName</p>
        <div className="listRightSideContainer">
          <p style={{ backgroundColor: "darkBlue" }}>Seafood</p>
          <p>Quantity: 7</p>
          <EditIcon />
          <DeleteIcon />
        </div>
      </div>
      <div className="listItemContainer">
        <p>ItemName</p>
        <div className="listRightSideContainer">
          <p style={{ backgroundColor: "darkGreen" }}>Vegetables</p>
          <p>Quantity: 2</p>
          <EditIcon />
          <DeleteIcon />
        </div>
      </div>
    </>
  );
}

export default ListItem;
