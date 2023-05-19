import React, { useState } from "react";
import { Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import classes from "../Assets/Styles/mboileMenu.module.css";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/Images/logo.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
function MobileMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Grid
        item
        container
        direction="row"
        padding={2}
        columnGap={1}
        paddingTop={3}
        alignItems={"center"}
      >
        <Grid item xs={2}>
          <img src={Logo} alt="logo" width={110} />
        </Grid>
        <Grid
          item
          onClick={() => {
            if (openDrawer) setOpenDrawer(false);
            else setOpenDrawer(true);
          }}
          paddingLeft={2}
        >
          {openDrawer ? (
            <KeyboardArrowUpIcon fontSize="medium" />
          ) : (
            <KeyboardArrowDownIcon fontSize="medium" />
          )}
        </Grid>
        <Grid item xs={8} container direction={"row-reverse"} gap={5}>
          <PersonOutlineIcon fontSize="medium" />
          <FavoriteBorderIcon fontSize="medium" />
        </Grid>
      </Grid>
      <Collapse timeout={1000} in={openDrawer}>
        <Grid
          item
          container
          height="100vh"
          direction="column"
          rowGap={2.5}
          paddingLeft={2}
        >
          <Grid item width="100%">
            <Divider light />
          </Grid>
          <Grid
            item
            onClick={() => {
              window.open("https://donate.stripe.com/test_3cs5lI34v5Lya409AA");
              setOpenDrawer(false);
            }}
          >
            Donate
          </Grid>
          <Divider light />
          <Grid
            item
            onClick={() => {
              navigate("our-impact");
              setOpenDrawer(false);
            }}
          >
            Our Impact
          </Grid>
          <Divider light />

          <Grid
            item
            onClick={() => {
              //   navigate("/");
              setOpenDrawer(false);
            }}
          >
            Contact us
          </Grid>
          <Divider light />
          <Grid
            item
            onClick={() => {
              //   navigate("/");
              setOpenDrawer(false);
            }}
          >
            Get Support
          </Grid>
          <Divider light />
        </Grid>
      </Collapse>
    </>
  );
}

export default MobileMenu;
