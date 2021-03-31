import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  return (
    <Navbar variant="dark" expand="lg" id="site-navbar">
      {/* <Container> */}
      <Link to="/" className="link-no-style">
        &nbsp;&nbsp;&nbsp; <img src={logo} width="32" height="32" />
        <Navbar.Brand as="span" className="font-logo">TING SP<span class="font-sublogo">A</span>CE</Navbar.Brand>
      </Link>
      <Nav className="mr-auto flex-row " activeKey={pageInfo && pageInfo.pageName}>
        <Link to="/" className="link-no-style">
          <Nav.Link as="span" eventKey="index">
            Home
              </Nav.Link>
        </Link>
        <Link to="/projects" className="link-no-style ml-2">
          <Nav.Link as="span" eventKey="projects">
            Projects
              </Nav.Link>
        </Link>
      </Nav>

      {/* </Container> */}
    </Navbar>
  )
}

export default CustomNavbar
