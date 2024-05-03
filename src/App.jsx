import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import Contact from "../src/Pages/Contact";
import About from "../src/Pages/About";
import Service from "../src/Pages/Service";
import Register from "../src/Pages/Register";
import Login from "../src/Pages/Login";
import Navbar from "./components/Navbar";
import Error from "./Pages/Error";
import Logout from "./Pages/Logout";
import Adminlayout from "./layouts/Admin-layout";
import AdminContacts from "./Pages/Admin-Contacts";
import AdminUsers from "./Pages/Admin-Users";
import AdminService from "./Pages/Admin-Service";
import AdminUpdate from "./Pages/Admin-Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<Adminlayout />}>
            <Route path="admincontact" element={<AdminContacts />} />
            <Route path="adminuser" element={<AdminUsers />} />
            <Route path="user/:id/edit" element={<AdminUpdate />} />
            <Route path="adminservice" element={<AdminService />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
