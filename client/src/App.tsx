import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/index";
import { Auth } from "./pages/auth/index";
import { AddPage } from "./pages/addPage/index";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <div className="app-container">
          <Routes>
            <Route
              path="/"
              element={
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              }
            />
            <Route
              path="/add"
              element={
                <FinancialRecordsProvider>
                  <AddPage />
                </FinancialRecordsProvider>
              }
            />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
