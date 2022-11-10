import React, { useState } from "react";
import "./header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function NavComponent() {
  const navigate = useNavigate();
  const goto = () => {
    navigate("/");
    hideSidebar();
  };
  const [navbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  const [sidebar, setSidebar] = useState("none");
  const showSidebar = () => {
    if (sidebar === "none") {
      setSidebar("block");
    } else {
      setSidebar("none");
    }
    console.log("in nav");
  };
  const hideSidebar = () => {
    console.log("in nav");
    setSidebar("none");
  };
  return (
    <nav className={navbar ? "scroll fixed-top" : "fixed-top"}>
      <Navbar className="Navbar" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={hideSidebar}
            className="Navbar_Brand"
            href="#home"
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <b>
                <logoname>Unbounce</logoname>{" "}
              </b>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={showSidebar}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ display: sidebar }}
          >
            <Nav className="me-auto">{/* //siderow */}</Nav>
            <Nav className="navcontent">
              <NavDropdown
                onDoubleClick={goto}
                className="navdrop"
                title="Home"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/about"
                  >
                    About Us
                  </Link>{" "}
                </NavDropdown.Item>

                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/management-team"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Management Team
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/training-team"
                  >
                    Training Team
                  </Link>{" "}
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                className="navdrop"
                title="Courses"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/blockchain"
                  >
                    Blockchain
                  </Link>{" "}
                </NavDropdown.Item>

                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/meta"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Metaverse
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/ar-vr"
                  >
                    AR/VR
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/aiml"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    AI/ML
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="navdrop"
                title="Segment"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/University"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    University
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/corporate"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Corporate
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/fresher"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Fresher
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/software"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Software Engg.
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="navdrop"
                title="Partner"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/job"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Jobs
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/coming"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Projects
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/coming"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Internship
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/coming"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    R&D
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/coming"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Incubation
                  </Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/coming"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Accelerator
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="navdrop"
                title="Networking"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/forum"
                  >
                     Discussion Forum
                  </Link>{" "}
                </NavDropdown.Item>

                <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/community"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                   Community
                  </Link>{" "}
                </NavDropdown.Item>
                {/* <NavDropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/training-team"
                  >
                    Training Team
                  </Link>{" "}
                </NavDropdown.Item> */}
              </NavDropdown>


              <Nav.Link className="navdrop">
                <Link to="/contact" onClick={hideSidebar}>
                  Contact Us
                </Link>
              </Nav.Link>

          
             
            </Nav>

            {/* <Button
                variant="contained"
                style={{
                  borderRadius: "50px",
                  backgroundColor: "rgb(56, 72, 241)",
                }}
              >
                Register
              </Button> */}
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{
                  borderRadius: "50px",
                  backgroundColor: "rgb(56, 72, 241)",
                  position:'relative',

                }}
              >
                REGISTER
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/adminForm"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Admin
                  </Link>{" "}
                </Dropdown.Item>

                <Dropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/form"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Others
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Dropdown>
              <Dropdown.Toggle
                variant="outlined"
                id="dropdown-basic"
                style={{
                  marginLeft:"10px",
                  border:"1px solid white",
                  borderRadius: "50px",
                  backgroundColor: "transparent",
                }}
              >
                Signin
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/adminForm"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Admin
                  </Link>{" "}
                </Dropdown.Item>

                <Dropdown.Item onClick={hideSidebar}>
                  {" "}
                  <Link
                    to="/form"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Others
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <Link to="/signin">
            <Button variant="outlined" style={{
                                        borderRadius:'20px',
                                        margin:'5px',
                                        marginTop:'10px',
                                        width:'100px',
                                        height:'42px',
                                        color:'white',
                                        border:'1px solid white',
                                        fontSize:'12px',
                                        padding:'20px'
                                        
          
          }} onClick={hideSidebar} >Sign In</Button></Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
