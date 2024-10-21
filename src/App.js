import "./App.css";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import Login from "./Componets/Login";
import SignUp from "./Componets/SignUp";
import Home from "./Componets/Home";
import ProfilePage from "./Componets/ProfilePage";
// import PageNotFound from "./Componets/pageNotFound";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<Home />} path="/*" />
          {/* <Route element={<PageNotFound />} path="/*" /> */}
          <Route element={<ProtectedRoutes />}>
            <Route element={<ProfilePage />} path="/profile" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
