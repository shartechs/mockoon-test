import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Movies from "../pages/Movies/Movies";

const PrivateRoutes = () => {
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt) {
      navigate("/login");
    }
  }, [jwt, navigate]);

  return <Routes>{jwt && <Route path="movies" element={Movies} />}</Routes>;
};

export default PrivateRoutes;
