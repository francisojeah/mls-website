import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import PageLoader from "./components/PageLoader";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<PageLoader />}>
                {React.createElement(
                  lazy(() => import("../src/pages/HomePage"))
                )}
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
