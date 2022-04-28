import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/cadastro" element={<Cadastro />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<UserMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserMenu() {
    return (
        <Menu>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </Menu>
    );
}

export default Router;
