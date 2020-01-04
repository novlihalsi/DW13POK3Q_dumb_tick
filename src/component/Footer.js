import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Button, Container, Grid } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";

// class ContentFooter extends Component {
//   render() {
//     return (
//       // <div style={{ flex: 1, padding: 30, marginTop: 20 }}>
//       //   <Typography
//       //     variant="h6"
//       //     style={{ color: "white", fontWeight: "bold", marginBottom: 20 }}
//       //   >
//       //     Discover
//       //   </Typography>
//       //   <Typography style={{ color: "white" }}>
//       //     Welcome to a place where words matter. smart voices and original ideas
//       //     take center stage - with no ads in sight. Watch
//       //   </Typography>
//       // </div>

//     );
//   }
// }

class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#EF233C" }}>
        {/* <div style={{ margin: "0 90px 0 90px" }}> */}
        <Container maxWidth="lg">
          <div style={{ paddingTop: 30 }}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <div
                  style={{
                    padding: 20
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{ color: "white", marginBottom: 20 }}
                  >
                    Halsi Ticket
                  </Typography>
                  <Typography variant="subtitle1" style={{ color: "white" }}>
                    Halsi Ticket is a web-based platform that provides ticktet
                    form various event around sport, music, science, and
                    programming.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div
                  style={{
                    padding: 20
                  }}
                >
                  <Typography variant="h5" style={{ color: "white" }}>
                    Follow Us On
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 20
                    }}
                  >
                    <InstagramIcon
                      style={{ color: "white", marginRight: 10 }}
                    />
                    <Typography variant="subtitle1" style={{ color: "white" }}>
                      @halsiticket
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div
                  style={{
                    padding: 20
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{ color: "white", marginBottom: 20 }}
                  >
                    Have a Question?
                  </Typography>
                  <Typography variant="subtitle1" style={{ color: "white" }}>
                    Email: halsiticket@gmail.com
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>

          <div>
            <hr />
          </div>

          <div
            style={{
              padding: "10px 0 10px 0",
              textAlign: "center"
            }}
          >
            <Typography variant="subtitle1" style={{ color: "white" }}>
              Copyright 2019 Halsi Ticket
            </Typography>
          </div>
        </Container>
        {/* </div> */}
      </div>
    );
  }
}

export default Footer;
