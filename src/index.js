import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CategoryPage from "./pages/CategoryPage";
import EventDetails from "./pages/EventDetails";
// import Signup from "./pages/Signup";
import MyTicket from "./pages/myticket/MyTicket";
// import Signin from "./pages/Signin";
import Payment from "./pages/payment/Payment";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./_redux/store";

import * as serviceWorker from "./serviceWorker";
import Profile from "./pages/Profile";
import AddEvent from "./pages/AddEvent";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/category/:id" component={CategoryPage} />
        <Route exact path="/eventdetails/:id" component={EventDetails} />
        <Route exact path="/ticket/:id" component={MyTicket} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/addevent" component={AddEvent} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
