import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Locations from "./pages/Locations";
import Reports from "./pages/Reports";
import Stages from "./pages/Stages";
import Scanner from "./pages/Scanner";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Elevate Inventory App</h1>
        <p>Desktop inventory management for staging and warehouse tracking.</p>

        <button onClick={() => setMenuOpen(prev => !prev)}>
          ☰
        </button>

        {menuOpen && (<nav style={{ marginBottom: "20px" }}>
          <Link to="/">Dashboard</Link> |{" "}
          <Link to="/inventory">Inventory</Link> |{" "}
          <Link to="/locations">Locations</Link> |{" "}
          <Link to="/stages">Stages</Link> |{" "}
          <Link to="/scanner">Scanner</Link> |{" "}
          <Link to="/reports">Reports</Link>
        </nav>)}

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/stages" element={<Stages />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;