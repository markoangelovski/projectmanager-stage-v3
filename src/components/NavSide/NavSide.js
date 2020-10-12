import React from "react";
import { useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./NavSide.css";

const NavSide = () => {
  const { isLoggedIn } = useStoreState(state => state);

  const handleNavItemClick = e => {
    // Remove .active class from the previous item
    const elem = document.querySelector(".active");
    if (elem) elem.classList.remove("active");
    // Add .active to the clicked item
    e.target.classList.add("active");
    // Remove .show class to hide the sidebar when item is clicked on mobile
    document.getElementById("sidebarMenu").classList.remove("show");
  };

  return (
    isLoggedIn && (
      <Navbar
        id="sidebarMenu"
        expand={false}
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="sidebar-sticky pt-3">
          <Nav as="ul" navbar={false} className="flex-column">
            <Nav.Item as="li">
              <Link
                onClick={handleNavItemClick}
                className="nav-link event_menu_click"
                data-action-detail="side_nav_home"
                to={"/"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                onClick={handleNavItemClick}
                className="nav-link event_menu_click"
                data-action-detail="side_nav_profile"
                to={"/profile"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-users"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Profile
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                onClick={handleNavItemClick}
                className="nav-link event_menu_click"
                data-action-detail="side_nav_projects"
                to={"/projects"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-layers"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                onClick={handleNavItemClick}
                className="nav-link event_menu_click"
                data-action-detail="side_nav_tasks"
                to={"/tasks?done=false"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-file"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                Tasks
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                onClick={handleNavItemClick}
                className="nav-link event_menu_click"
                data-action-detail="side_nav_clock"
                to={"/clock"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Clock
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                onClick={handleNavItemClick}
                className="nav-link event_menu_click"
                data-action-detail="side_nav_calendar"
                to={"/calendar"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Calendar
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                onClick={handleNavItemClick}
                className="nav-link event_menu_click"
                data-action-detail="side_nav_stats"
                to={"/stats"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bar-chart-2"
                >
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
                Stats
              </Link>
            </Nav.Item>
          </Nav>
        </div>
      </Navbar>
    )
  );
};

export default NavSide;

// https://getbootstrap.com/docs/4.5/examples/dashboard/#
