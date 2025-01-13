import "./App.css";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Componets/SignUp";
import Home from "./Componets/Home-page-component/Home";
import ProfilePage from "./Componets/ProfilePage";
// import PageNotFound from "./Componets/pageNotFound";
import PrincingCard from "./Componets/Payment/pricing/pricingCardUser.js";
import { BrowserRouter } from "react-router-dom";
import Contact from "./Componets/Contact";
import Admin from "./Componets/Admin-view/Admin-page";
// import CustomerLog from "./Componets/Customer-log/Customer-log.js";
import CustomerLogAdmin from "./Componets/Customer-log/Customer-log.js";
import EnhancedTable from "./Componets/Customer-log/Customer-log-dashboard.js";
import CustomerHistory from "./Componets/Customer-log/Customer-history.js";
// import Register from "./Componets/Register";
function App() {
  return (
    <>
      {/** DashboardLayoutBasic should be inside protected routes */}
      <BrowserRouter basename="/">
        <Routes>
          {/* <Route element={<Login />} path="/login" /> */}
          <Route element={<SignUp />} path="signup" />
          <Route exact element={<Home />} path="/*" />
          <Route element={<Contact />} path="contact" />
          <Route element={<PrincingCard />} path="pricing" />

          <Route element={<CustomerLogAdmin />} path="customer-log" />
          <Route element={<EnhancedTable />} path="customer-log/dashboard" />
          <Route element={<CustomerHistory />} path="customer-log/history" />

          {/* <Route element={<Register />} path="/register" /> */}
          {/* <Route element={<PageNotFound />} path="/*" /> */}
          <Route element={<ProtectedRoutes />}>
            <Route element={<ProfilePage />} path="profile" />
            <Route element={<Admin />} path="admin" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
