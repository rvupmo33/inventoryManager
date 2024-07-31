import Link from "next/link";

function Navbar() {
  return (
    <header>
      <h1>SimplePantry</h1>
      <div className="navbarLinksContainer">
        <Link href="/">Pantry List</Link>
        <br />
        <Link href="/grocery">Grocery List</Link>
      </div>
    </header>
  );
}

export default Navbar;
