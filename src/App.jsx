import "./App.css";
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
      <div className="app-layout">
        <header className="app-header">
          <button
            className="burger-button"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            ☰
          </button>

          <div>
            <h1>Elevate Inventory App</h1>
            <p>Desktop inventory management for staging and warehouse tracking.</p>
          </div>
        </header>  

        {menuOpen && (
          <nav className="side-menu">
            <Link to="/" onClick={() => setMenuOpen(false)}>Dashboard</Link> |{" "}
            <Link to="/inventory" onClick={() => setMenuOpen(false)}>Inventory</Link> |{" "}
            <Link to="/locations" onClick={() => setMenuOpen(false)}>Locations</Link> |{" "}
            <Link to="/stages" onClick={() => setMenuOpen(false)}>Stages</Link> |{" "}
            <Link to="/scanner" onClick={() => setMenuOpen(false)}>Scanner</Link> |{" "}
            <Link to="/reports">Reports</Link>
          </nav>
        )}

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/stages" element={<Stages />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;