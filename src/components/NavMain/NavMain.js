import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useStoreActions, useStoreState } from "easy-peasy";

import Filter from "../Filter/Filter.js";

import "./NavMain.css";

const NavMain = () => {
  const { isLoggedIn } = useStoreState(state => state);
  const { logOut } = useStoreActions(actions => actions);

  return (
    isLoggedIn && (
      <Navbar
        bg="dark"
        variant="dark"
        collapseOnSelect
        expand="md"
        className="sticky-top flex-md-nowrap p-0 shadow"
      >
        <Navbar.Brand className="col-md-3 col-lg-2 mr-0 px-3">
          jBot
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
