import { Grid } from "@mui/material";
import React from "react";
import classes from "../Assets/Styles/NavBar.module.css";
import Logo from "../Assets/Images/bg5.jpg";
import useWindowDimensions from "../WindowDimensions";

import Bg2 from "../Assets/Images/b6.jpg";

const OurImpact = () => {
  const { width } = useWindowDimensions();
  return (
    <Grid container xs={12} paddingTop={width > 1000 ? 15 : 0}>
      <Grid
        container
        item
        xs={12}
        width={"100%"}
        height={"70vh"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#000",
        }}
      >
        <Grid item className={classes["desc4"]} fontSize={{ xs: 35, md: 58 }}>
          Our Impact
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent={"center"}
        alignItems={"center"}
        marginBottom={10}
        marginTop={5}
      >
        <Grid
          item
          className={classes["desc"]}
          xs={10}
          sm={8}
        //   paddingTop={{ xs: 5, sm: 2}}
        >
          Discover the Power of Our Impact:
        </Grid>
        <Grid item className={classes["desc"]} xs={8} paddingTop={2}>
          Transforming Lives through Hunger Relief At Food Bank, we are
          dedicated to eradicating hunger in our community. With a relentless
          commitment to our mission, we have made a significant impact on the
          lives of individuals and families facing food insecurity.
        </Grid>
        <Grid item className={classes["desc"]} xs={8} paddingTop={2}>
          Through our collective efforts, we have provided over 1 million meals
          annually to those in need. Our food bank has become a lifeline,
          offering nourishment and hope to the most vulnerable members of our
          community.
        </Grid>
        <Grid item className={classes["desc"]} xs={8} paddingTop={2}>
          But it's not just about the numbers. It's about the stories of
          resilience and the lives we touch. Meet Maria, a single mother who
          found solace and support through our programs, or James, a senior
          citizen whose life took a positive turn after accessing our nutritious
          meal options. These personal stories exemplify the transformative
          power of our work.
        </Grid>
        <Grid item className={classes["desc"]} xs={8} paddingTop={2}>
          None of this would be possible without the support of our dedicated
          volunteers, generous community partners, and compassionate donors.
          Together, we are making a difference in the lives of countless
          individuals and families, building a stronger, more resilient
          community.
        </Grid>
        <Grid item className={classes["desc"]} xs={8} paddingTop={2}>
          Join us in our mission to combat hunger. Volunteer your time, make a
          donation, or share our message on social media. Together, we can
          create lasting change and ensure that no one goes hungry.
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
          <button
          className={classes["donateButton"]}
          onClick={() => {
            window.open("https://donate.stripe.com/test_3cs5lI34v5Lya409AA");
          }}
        >
          DONATE
        </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OurImpact;
