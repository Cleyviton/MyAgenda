import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Register } from "../pages/Register";
import { ContactProvider } from "../contexts/ContactContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ContactProvider>
            <Dashboard />
          </ContactProvider>
        }
      />
    </Routes>
  );
};
