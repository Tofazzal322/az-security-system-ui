import { CssBaseline, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box >
      <CssBaseline />
      <Grid sx={{ backgroundColor: "#000", width: "auto", px: 8 }}>
        <Grid>
          <Typography  sx={{ textAlign: "right", color: "#fff", p: 3 }}>
                      <FacebookIcon sx={{marginLeft:"10px"}} />
                      <PinterestIcon sx={{marginLeft:"10px"}}/>
                      <InstagramIcon sx={{marginLeft:"10px"}}/>
                      <LinkedInIcon sx={{marginLeft:"10px"}}/>
                      <TwitterIcon sx={{marginLeft:"10px"}}/>
                      <YouTubeIcon sx={{marginLeft:"10px"}} />
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          // alignItems="center"
          sx={{ display: "flex", px: 3 }}
        >
          <Grid>
            <Box sx={{ width: "100%", maxWidth: 500 }}>
              <Typography
                sx={{ color: "#fff" }}
                variant="h6"
                component="div"
                gutterBottom
              >
                {" "}
                About Us
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                Company Profile
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                Corporate Governance
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                Financial Report
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                Cybersecurity
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                <Link to="/contactUs"> Contact Us</Link>
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <Box sx={{ width: "100%", maxWidth: 500 }}>
              <Typography
                sx={{ color: "#fff" }}
                variant="h6"
                component="div"
                gutterBottom
              >
                {" "}
                Newsroom
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                Blog
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                Latest News
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                Success Stories
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                Press Mentions
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <Box sx={{ width: "100%", maxWidth: 500 }}>
              <Typography
                sx={{ color: "#fff" }}
                variant="h6"
                component="div"
                gutterBottom
              >
                {" "}
                Event & Showroom
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                Digital Showroom
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                Camera Live
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                Event List
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <Box sx={{ width: "100%", maxWidth: 500 }}>
              <Typography
                sx={{ color: "#fff" }}
                variant="h6"
                component="div"
                gutterBottom
              >
                {" "}
                Quick Links
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                Core Technologies
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                Where To Buy
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                Online Support
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <Box sx={{ width: "100%", maxWidth: 500 }}>
              <Typography
                sx={{ color: "#fff" }}
                variant="h6"
                component="div"
                gutterBottom
              >
                CONTACT US
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                Az Security HeadQuarter
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                P.Box.2410 Sadar Road, Dhobaura <br /> Districtic: Mymensingh
              </Typography>
              <Typography
                sx={{ color: "#d5d0d0" }}
                variant="body2"
                gutterBottom
              >
                {" "}
                +880174654451
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{backgroundColor:"#660000",mt:1}} />
        <Grid>
          <Box sx={{ justifyContent: "center", p: 2 }}>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "#fff" }}
            >
              Az Security System
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", color: "#d5d0d0" }}
            >
              {" "}
              © 2021 Hangzhou Az Security System Digital Technology Co., Ltd.
              All Rights Reserved.{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
