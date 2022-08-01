import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Dashboard } from "./pages/Dashboard";
import { Store } from "./pages/Store";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Login } from "./pages/Login";
import { UserData } from "./types/UserDataType";

function App() {
  const userData: UserData = JSON.parse(localStorage.getItem("userData")!);
  let defaultRoute: string = "/login";
  if (userData) {
    defaultRoute = userData.role === 1 ? "/dashboard" : "/store";
  }
  return (
    <ShoppingCartProvider>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Navigate to={defaultRoute} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                user={userData}
                component={<Dashboard />}
                redirectPath="/login"
              />
            }
          />
          <Route
            path="/store"
            element={
              <ProtectedRoute
                user={userData}
                component={<Store />}
                redirectPath="/login"
              />
            }
          />
          <Route path="/login" element={<Login user={userData} />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
