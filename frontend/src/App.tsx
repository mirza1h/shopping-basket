import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Dashboard } from "./pages/Dashboard";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Login } from "./pages/Login";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/store" element={<Store />} />
          <Route path="/" element={<Store />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
