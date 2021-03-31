import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <>
    <Container fluid className="px-0 main bg-silver">
      <Navbar pageInfo={pageInfo} />
      <Row noGutters>
        <Col>
          <Container>
            <main>{children}</main>
          </Container>
        </Col>
      </Row>
    </Container>
    <Container fluid className="px-0">
      <Row noGutters>
        <Col className="footer-col">
          <footer>
            <span>
              Ting © {new Date().getFullYear()}
            </span>
          </footer>
        </Col>
      </Row>
    </Container>
  </>

)

export default Layout
