import React, { useEffect, useState, useMemo } from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../Screens/HomePage";
import { Grid } from "@mui/material";
import OurImpact from "../Screens/OurImpact";

const Navigate = () => {
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    if (
      window.location.pathname === "/Signup" ||
      window.location.pathname === "/Login" ||
      window.location.pathname === "/resetPassword"
    ) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [window.location.pathname]);
  return (
    <Router>
      <NavBar />

      <Grid item minHeight={"100vh"}>
        <Routes>

        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/our-impact" element={<OurImpact />} />

        </Routes>
      </Grid>
      {/* {showFooter ? <Footer /> : <></>} */}
    </Router>
  );
};

export default Navigate;
