// import React, { Component } from "react";
// import { Typography, Button } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { connect } from "react-redux";
// class Signin extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//       error: false
//     };
//   }

//   handleEmailChange = event => {
//     const input = event.target;
//     const value = input.value;

//     // this.setState({ [input.name]: value });
//     this.setState({ [input.name]: value }, () => {
//       // console.log(this.state.email);
//     });
//   };
//   handlePasswordChange = event => {
//     const input = event.target;
//     const value = input.value;

//     // this.setState({ [input.name]: value });
//     this.setState({ [input.name]: value }, () => {
//       // console.log(this.state.password);
//     });
//   };
//   handlePress = () => {
//     const { email, password } = this.state;
//     if (!email || !password) {
//       this.setState({
//         error: true
//       });
//     } else {
//       this.setState({
//         error: false
//       });
//       axios
//         .post(`http://localhost:5000/api/v1/login`, {
//           email: this.state.email,
//           password: this.state.password
//         })
//         .then(res => {
//           if (res.data.error) {
//             alert(res.data.message);
//           } else {
//             const data = res.data;
//             localStorage.setItem("id", data.user.id);
//             localStorage.setItem("fullname", data.user.fullname);
//             localStorage.setItem("username", data.user.username);
//             localStorage.setItem("email", data.user.email);
//             localStorage.setItem("image", data.user.image);
//             localStorage.setItem("token", data.token);
//             localStorage.setItem("isLogin", true);
//             this.props.history.push("/");
//             // this.props.dispatch(login(true));
//             // console.log(res.data);
//           }
//         })
//         .catch(err => {
//           alert(err);
//         });
//     }
//   };

//   // });
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
//             marginTop: "200px"
//           }}
//         >
//           <div style={{ flex: 1 }}>
//             <img src="https://miro.medium.com/max/214/1*4A5l12K8ize1400kV83dPw.png" />
//           </div>
//           <div style={{ flex: 1, padding: "50px 100px 50px 100px" }}>
//             <div>
//               <Typography variant="h4" style={{ marginBottom: 20 }}>
//                 Sign in with email
//               </Typography>
//               <Typography style={{ marginBottom: 15 }}>
//                 Enter the email address associated with your account, and we’ll
//                 send a magic link to your inbox.
//               </Typography>
//             </div>

//             <div>
//               <TextField
//                 label="Email"
//                 name="email"
//                 type="email"
//                 onChange={this.handleEmailChange}
//                 style={{ width: 300, marginBottom: 20 }}
//               />
//               <TextField
//                 style={{ width: 300, marginBottom: 40 }}
//                 name="password"
//                 label="Password"
//                 type="password"
//                 onChange={this.handlePasswordChange}
//               />
//             </div>

//             <div style={{ marginBottom: 30 }}>
//               {/* <Link to="/" style={{ textDecoration: "none" }}> */}
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={this.handlePress}
//               >
//                 Continue
//               </Button>
//               {/* </Link> */}
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

//             <div>
//               <Link to="/register" style={{ textDecoration: "none" }}>
//                 <Button style={{ marginRight: 15 }} color="primary">
//                   <ChevronLeftIcon />
//                   All Sign in Option
//                 </Button>
//               </Link>
//             </div>
//           </div>
//           <div style={{ flex: 1 }}>
//             <img src="https://miro.medium.com/max/214/1*XVLaTKHOGlnXqvnPe2Ahaw.png" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Signin;

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
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
// import Register from "./Register";

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
  }
}));

function Login() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [user, setState] = React.useState({
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
    const { email, password } = user;
    // console.log(fullname);
    if (!email || !password) {
      setError(true);
    } else {
      setError(false);
      axios
        .post(`http://localhost:5000/api/v1/login`, {
          email: email,
          password: password
        })
        .then(res => {
          // console.log(res);
          const data = res.data;
          console.log(data);
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
      <Button color="inherit" variant="outlined" onClick={handleOpen}>
        Login
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
            {/* <div style={{ width: "214px" }}>
              <img
                src={
                  "https://miro.medium.com/max/214/1*4A5l12K8ize1400kV83dPw.png"
                }
                alt="#"
                style={{ height: "100%", width: "100%" }}
              />
            </div> */}
            <div
              style={{
                width: "472px",
                textAlign: "center",
                padding: "44px 56px 0px 56px"
              }}
            >
              <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                <Typography
                  variant="h4"
                  style={{ marginBottom: "10px", color: "#EF233C" }}
                >
                  Sign in with email
                </Typography>
                <Typography variant="subtitle2" style={{ color: "grey" }}>
                  Enter the email address associated with your account, and
                  we’ll send a magic link to your inbox.
                </Typography>
              </div>
              <div>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  onChange={handleFormchange}
                  style={{ width: 300, marginBottom: 20 }}
                />
                <TextField
                  style={{ width: 300, marginBottom: 40 }}
                  name="password"
                  label="Password"
                  type="password"
                  onChange={handleFormchange}
                />
              </div>
              <div style={{ marginBottom: "30px" }}>
                <Button
                  onClick={handlePress}
                  variant="contained"
                  color="secondary"
                >
                  Continue
                </Button>
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
            </div>
            <div style={{ position: "absolute", top: "0px", right: "0px" }}>
              <Button size="small" onClick={handleClose}>
                <CloseIcon />
              </Button>
            </div>
            {/* <div style={{ width: "214px", position: "relative" }}>
              <img
                src={
                  "https://miro.medium.com/max/214/1*XVLaTKHOGlnXqvnPe2Ahaw.png"
                }
                alt="#"
                style={{ height: "100%", width: "100%" }}
              />
            </div> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Login;
