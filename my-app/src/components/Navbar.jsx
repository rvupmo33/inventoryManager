//

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

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
          {/* <Link href="/">Pantry List</Link>
          <Link href="/grocery">Grocery List</Link> */}
          <a href="/">Pantry List</a>
          <a href="/grocery">Grocery List</a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
