import React from "react";
import { Grid, Typography } from "@material-ui/core";

function AboutSection() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }} id="about">
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          About Us
        </Typography>
        <Grid container justify="center">
          <Grid item xs={12} md={8} data-aos="fade-up">
            <Typography variant="h6" align="center" paragraph>
              We're a small team passionate about building tools that help
              businesses grow.
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary">
              Founded with the belief that great software should be simple,
              reliable and affordable, we work closely with our customers to
              deliver a product that fits their needs. Our mission is to save
              you time so you can focus on what matters most.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AboutSection;
