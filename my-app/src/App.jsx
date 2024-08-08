import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pantry from "./pages/Pantry";
import Grocery from "./pages/Grocery";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pantry />} />
          <Route path="/grocery" element={<Grocery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
