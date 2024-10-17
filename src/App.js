import "./App.css";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import Login from "./Componets/Login";
import SignUp from "./Componets/SignUp";
import Home from "./Componets/Home";
import ProfilePage from "./Componets/ProfilePage";
import PageNotFound from "./Componets/pageNotFound";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<Home />} path="/home" />
        <Route element={<PageNotFound />} path="/*" />
        <Route element={<ProtectedRoutes />}>
          <Route element={<ProfilePage />} path="/profile" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
