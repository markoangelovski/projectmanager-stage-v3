import React from "react";
import Nav from "react-bootstrap/Nav";

import DateRangePicker from "../DateRangePicker/DateRangePicker";

const TitleMain = props => {
  const { callFunction, query, mainNav, secondNav } = props;

  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
      <Nav
        variant="tabs"
        defaultActiveKey={
          window.location.hash.includes(secondNav) ? "link-1" : "home"
        }
        className="w-50"
      >
        <Nav.Item>
          <Nav.Link href={mainNav} className="nav-link" eventKey="home">
            {props.children[0]}
          </Nav.Link>
        </Nav.Item>
        {secondNav && (
          <Nav.Item>
            <Nav.Link href={secondNav} className="nav-link" eventKey="link-1">
              {props.children[1]}
            </Nav.Link>
          </Nav.Item>
        )}
      </Nav>
      {/* Don't display DateRangePicker if query props is not available */}
      {query && <DateRangePicker callFunction={callFunction} query={query} />}
    </div>
  );
};

export default TitleMain;
