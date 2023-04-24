import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Routes from "../../router/Routes.js";

import AGAdataLayer from "../../components/Scripts/AGAdataLayer.js";
import GTM from "../../components/Scripts/GTM.js";

import NavMain from "../../components/NavMain/NavMain.js";
import NavSide from "../../components/NavSide/NavSide.js";

const Layout = props => {
  console.log("I'm being rendered! Layout");
  return (
    <>
      <AGAdataLayer />
      <GTM />
      <NavMain />
      <Container fluid>
        <Row>
          <NavSide />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <Routes />
          </main>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
