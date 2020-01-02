// import React, { Component } from "react";
// import { Typography, Button } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import { Link } from "react-router-dom";
// import axios from "axios";

// class Signup extends Component {
//   constructor() {
//     super();
//     this.state = {
//       user: {
//         fullname: "",
//         username: "",
//         email: "",
//         password: ""
//       },
//       error: false
//     };
//   }

//   handleFormchange = event => {
//     let usernew = { ...this.state.user };
//     usernew[event.target.name] = event.target.value;
//     this.setState({
//       user: usernew
//     });
//     this.setState({ error: false });
//   };

//   handlePress = () => {
//     const { fullname, username, email, password } = this.state.user;
//     if (!fullname || !username || !email || !password) {
//       this.setState({
//         error: true
//       });
//     } else {
//       this.setState({
//         error: false
//       });
//       axios
//         .post(`http://localhost:5000/api/v1/register`, {
//           fullname: fullname,
//           username: username,
//           email: email,
//           password: password
//         })
//         .then(res => {
//           // console.log(res);
//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("id", res.data.user.id);
//           // this.props.dispatch(login(true));
//         })
//         .catch(err => {
//           alert(err);
//         });
//     }
//   };
//   render() {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "row"
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             textAlign: "center",
//             margin: "180px 300px 0 300px"
//           }}
//         >
//           <div style={{ flex: 1 }}>
//             <img src="https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png" />
//           </div>
//           <div style={{ flex: 1, padding: "20px 100px 50px 100px" }}>
//             <div>
//               <Typography
//                 variant="h4"
//                 style={{ marginBottom: 20, fontWeight: "bold" }}
//               >
//                 Join Halsi Ticket.
//               </Typography>
//               <Typography style={{ marginBottom: 15 }}>
//                 Create an account to Buy Instant Ticket
//               </Typography>
//             </div>

//             <div>
//               <TextField
//                 label="Fullname"
//                 name="fullname"
//                 style={{ width: 300, marginBottom: 20 }}
//                 onChange={this.handleFormchange}
//               />
//               <TextField
//                 label="Username"
//                 name="username"
//                 style={{ width: 300, marginBottom: 20 }}
//                 onChange={this.handleFormchange}
//               />
//               <TextField
//                 style={{ width: 300, marginBottom: 20 }}
//                 label="Password"
//                 type="password"
//                 name="password"
//                 onChange={this.handleFormchange}
//               />
//               <TextField
//                 label="Email"
//                 name="email"
//                 type="email"
//                 onChange={this.handleFormchange}
//                 style={{ width: 300, marginBottom: 20 }}
//               />
//             </div>
//             {this.state.error ? (
//               <div>
//                 <Typography variant="h5" style={{ color: "red" }}>
//                   All Field Required
//                 </Typography>
//               </div>
//             ) : (
//               <div></div>
//             )}

//             <div style={{ marginBottom: 30 }}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={this.handlePress}
//               >
//                 Register
//               </Button>
//             </div>

//             <div>
//               <Typography>
//                 Already have an account? <Link to="/signin">Sign in</Link>
//               </Typography>
//               <Typography>
//                 <Link to="/" style={{ textDecoration: "none" }}>
//                   Back to Home
//                 </Link>
//               </Typography>
//               <Typography variant="subtitle2" style={{ color: "grey" }}>
//                 To make Website work, we log user data and share it with service
//                 providers. Click “Sign Up” above to accept Web’s
//                 <a href="#">Terms of Service</a>
//                 <a href="#">Privacy Policy</a>.
//               </Typography>
//             </div>
//           </div>
//           <div style={{ flex: 1 }}>
//             <img src="https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Signup;

import React from "react";
import {
  Button,
  Modal,
  makeStyles,
  Backdrop,
  Fade,
  TextField,
  Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "500px",
    height: "500px",
    backgroundColor: theme.palette.background.paper,
    border: "8px #EF233C solid"
    // boxShadow: theme.shadows[5],
  }
}));

function Signup() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [user, setState] = React.useState({
    fullname: "",
    username: "",
    email: "",
    password: ""
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormchange = event => {
    // let usernew = [...user];

    // usernew{event.target.name} = event.target.value;

    // setUser([usernew]);
    setState({ ...user, [event.target.name]: event.target.value });
    setError(false);
  };

  const handlePress = () => {
    const { fullname, username, email, password } = user;
    // console.log(fullname);
    if (!fullname || !username || !email || !password) {
      setError(true);
    } else {
      setError(false);
      axios
        .post(`http://localhost:5000/api/v1/register`, {
          fullname: fullname,
          username: username,
          email: email,
          password: password
        })
        .then(res => {
          // console.log(res);
          const data = res.data;
          console.log(res);
          localStorage.setItem("id", data.user.id);
          localStorage.setItem("fullname", data.user.fullname);
          localStorage.setItem("username", data.user.username);
          localStorage.setItem("email", data.user.email);
          localStorage.setItem("image", data.user.image);
          localStorage.setItem("token", data.token);
          // props.dispatch(login(true));
          window.location.reload();
        })
        .catch(err => {
          alert(err);
        });
    }
    // console.log(error);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen} color="inherit">
        Sign Up
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div
              style={{
                textAlign: "center"
              }}
            >
              <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                <Typography
                  variant="h4"
                  style={{ marginBottom: "10px", color: "#EF233C" }}
                >
                  Sign Up
                </Typography>
                <Typography variant="subtitle2" style={{ color: "grey" }}>
                  Create an account to buy Ticket instantly
                </Typography>
              </div>
              {/* <div> */}
              <div>
                <TextField
                  label="Fullname"
                  name="fullname"
                  onChange={handleFormchange}
                  style={{ width: 300, marginBottom: 20 }}
                />
              </div>
              <div>
                <TextField
                  label="Username"
                  name="username"
                  onChange={handleFormchange}
                  style={{ width: 300, marginBottom: 20 }}
                />
              </div>
              <div>
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleFormchange}
                  style={{ width: 300, marginBottom: 20 }}
                />
              </div>
              <div>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  onChange={handleFormchange}
                  style={{ width: 300, marginBottom: 20 }}
                />
              </div>
              {/* </div> */}
              <div style={{ marginTop: "20px" }}>
                <Button
                  onClick={handlePress}
                  variant="contained"
                  color="secondary"
                >
                  Register
                </Button>
              </div>
              {error ? (
                <div>
                  <Typography variant="h5" style={{ color: "red" }}>
                    All Field Required
                  </Typography>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div style={{ position: "absolute", top: "0px", right: "0px" }}>
              <Button size="small" onClick={handleClose}>
                <CloseIcon />
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Signup;
