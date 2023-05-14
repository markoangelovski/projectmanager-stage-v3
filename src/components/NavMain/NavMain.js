import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useStoreActions, useStoreState } from "easy-peasy";

import Filter from "../Filter/Filter.js";

import "./NavMain.css";

const {
  "pmspa-api": { api_booking_machine }
} = require(`../../config/${process.env.REACT_APP_API_CONFIG}.json`);

const NavMain = () => {
  const [isBookingMachineOk, setIsBookingMachineOk] = useState(false);

  const { isLoggedIn } = useStoreState((state) => state);
  const { logOut } = useStoreActions((actions) => actions);

  useEffect(() => {
    (async () => {
      // Checks if booking machine is alive. The call is here instead of in the Store since I couldn't be bothered now on May 14th 23'
      fetch(`${api_booking_machine}/health`, {
        headers: {
          Authorization: document.cookie
            .split("; ")
            .find((cookie) => cookie.includes("Bearer"))
            .split("=")[1]
        }
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === "ok") {
            setIsBookingMachineOk(true);
          }
        })
        .catch((err) => console.warn(err));
    })();
  }, []);

  return (
    isLoggedIn && (
      <Navbar
        bg="dark"
        variant="dark"
        collapseOnSelect
        expand="md"
        className="sticky-top flex-md-nowrap p-0 shadow"
      >
        <Navbar.Brand className="col-md-3 col-lg-2 mr-0 px-3 stats-container">
          jBot{" "}
          <span
            title={`Booking Machine online status. We are ${
              isBookingMachineOk ? "live! :)" : "not live. :("
            }`}
            className={`status ${isBookingMachineOk && "ok"}`}
          ></span>
        </Navbar.Brand>
        <Navbar.Toggle
          className="position-absolute"
          aria-controls="sidebarMenu"
          onClick={() => {
            document.getElementById("sidebarMenu").classList.toggle("show");
          }}
        />
        <Filter />
        <Nav as="ul" className="px-3">
          <Nav.Item as="li">
            <Nav.Link
              className="event_menu_click"
              data-action-detail="main_nav_logout"
              onClick={() => logOut()}
            >
              Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    )
  );
};

export default NavMain;

/* https://getbootstrap.com/docs/4.5/examples/dashboard/#
<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
  <ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
      <a class="nav-link" href="#">Sign out</a>
    </li>
  </ul>
</nav> */
