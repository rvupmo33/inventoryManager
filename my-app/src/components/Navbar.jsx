//

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header>
        <div className="websiteNameContainer">
          <FormatListBulletedIcon />
          <h3>SimplyPantry</h3>
        </div>
        <div></div>
        <div className="navListContainer">
          <Link to="/">Pantry List</Link>
          <Link to="/grocery">Grocery List</Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
