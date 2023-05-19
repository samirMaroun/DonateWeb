import { Grid } from "@mui/material";
import React from "react";
import classes from "../Assets/Styles/NavBar.module.css";
import Logo from "../Assets/Images/logo.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import useWindowDimensions from "../WindowDimensions";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
const NavBar = () => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  return width > 1000 ? (
    <Grid
      container
      direction={"row"}
      className={classes["NavBar"]}
      paddingLeft={10}
      paddingRight={10}
      position={"fixed"}
      bgcolor={"#fff"}
    >
      <Grid item xs={5} container direction={"row"} gap={5}>
        <Grid
          item
          className={classes["NavLink"]}
          onClick={() => {
            window.open("https://donate.stripe.com/test_3cs5lI34v5Lya409AA");
          }}
        >
          Donate
        </Grid>
        <Grid
          item
          className={classes["NavLink"]}
          onClick={() => {
            navigate("our-impact");
          }}
        >
          Our Impact
        </Grid>
      </Grid>
      <Grid
        item
        xs={2}
        onMouseOver={(e) => {
          e.target.style.cursor = "pointer";
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo} alt="logo" width={110} />
      </Grid>
      <Grid item xs={5} container direction={"row-reverse"} gap={5}>
        <PersonOutlineIcon fontSize="medium" />
        <FavoriteBorderIcon fontSize="medium" />
        <Grid item className={classes["NavLink"]}>
          Contact Us
        </Grid>
        <Grid item className={classes["NavLink"]}>
          Get Support
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <MobileMenu />
  );
};

export default NavBar;
