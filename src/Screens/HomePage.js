import { Grid } from "@mui/material";
import React from "react";
import classes from "../Assets/Styles/NavBar.module.css";
import Logo from "../Assets/Images/bg.jpg";
import L1 from "../Assets/Images/l1.jpg";
import L2 from "../Assets/Images/l2.jpg";
import L3 from "../Assets/Images/l3.jpg";
import p1 from "../Assets/Images/p1.png";
import p2 from "../Assets/Images/p2.png";
import p3 from "../Assets/Images/p3.jpg";
import p4 from "../Assets/Images/p4.jpg";
import useWindowDimensions from "../WindowDimensions";

import Bg2 from "../Assets/Images/secondBg.jpg";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const HomePage = () => {
  const { width } = useWindowDimensions();
  return (
    <Grid container xs={12} paddingTop={width > 1000 ? 15 : 0}>
      <Grid
        container
        item
        xs={12}
        width={"100%"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#000",
        }}
      >
        <button
          className={classes["donateButton"]}
          onClick={() => {
            window.open("https://donate.stripe.com/test_3cs5lI34v5Lya409AA");
          }}
        >
          DONATE
        </button>
      </Grid>
      <Grid
        item
        container
        justifyContent={"center"}
        alignItems={"center"}
        marginBottom={10}
        marginTop={10}
      >
        <Grid
          item
          className={classes["desc"]}
          xs={10}
          sm={8}
          paddingTop={{ xs: 5, sm: 5 }}
        >
          The Foodbank Project is the first online donation platform in New
          Zealand where people can buy food items that are donated to food banks
          to be given to people in need. Please donate to The Foodbank Project
          to support people going without.
        </Grid>
        <Grid item className={classes["desc"]} xs={8} paddingTop={2}>
          Please donate to The Foodbank Project to support people going without.
        </Grid>
        <Grid item className={classes["desc2"]} xs={12} paddingTop={2}>
          WAYS YOU CAN GIVE
        </Grid>
        <Grid
          item
          container
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: 10, md: 0 }}
        >
          <Grid
            item
            xs={4}
            container
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={L1} alt={"hooo"} width={"300px"}></img>
            <Grid
              item
              className={classes["desc3"]}
              xs={12}
              paddingTop={2}
              paddingBottom={1}
            >
              Food Parcels
            </Grid>
            <button className={classes["donateButton2"]}>DONATE</button>
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={L3} alt={"hooo"} width={"300px"}></img>
            <Grid
              item
              className={classes["desc3"]}
              xs={12}
              paddingTop={2}
              paddingBottom={1}
            >
              Most Needed Items
            </Grid>
            <button className={classes["donateButton2"]}>DONATE</button>
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={L2} alt={"hooo"} width={"300px"}></img>
            <Grid
              item
              className={classes["desc3"]}
              xs={12}
              paddingTop={2}
              paddingBottom={1}
            >
              Browse All
            </Grid>
            <button className={classes["donateButton2"]}>DONATE</button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        width={"100%"}
        height={"100vh"}
        // bgcolor={""}
        style={{
          backgroundImage: `url(${Bg2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Grid
          item
          container
          width={"100%"}
          height={"100%"}
          bgcolor={"rgba(0,0,0,0.2)"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={5}
        >
          <Grid item className={classes["desc4"]} fontSize={{ xs: 35, md: 58 }}>
            Lebanon's first online foodbank
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes["desc2"]} xs={12} paddingTop={8}>
        Your Donations
      </Grid>
      <Grid
        item
        className={classes["desc5"]}
        paddingTop={1}
        paddingBottom={1}
        xs={12}
      >
        How it works
      </Grid>
      <Grid
        item
        container
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 10, md: 0 }}
        paddingTop={5}
      >
        <Grid
          item
          xs={3}
          container
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src={p1} alt={"hooo"} width={"150px"}></img>
          <Grid
            item
            className={classes["desc3"]}
            xs={8}
            paddingTop={2}
            paddingBottom={1}
          >
            Donors buy much-needed items through The Foodbank Project
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          container
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src={p2} alt={"hooo"} width={"150px"}></img>
          <Grid
            item
            className={classes["desc3"]}
            xs={8}
            paddingTop={2}
            paddingBottom={1}
          >
            Countdown delivers donated items to foodbanks around Lebanon
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          container
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src={p3} alt={"hooo"} width={"150px"}></img>
          <Grid
            item
            className={classes["desc3"]}
            xs={8}
            paddingTop={2}
            paddingBottom={1}
          >
            Food parcels are picked up from foodbanks by people in need
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          container
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src={p4} alt={"hooo"} width={"150px"}></img>
          <Grid
            item
            className={classes["desc3"]}
            xs={8}
            paddingTop={2}
            paddingBottom={1}
          >
            Your donations are helping to end food insecurity in Lebanon!
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
