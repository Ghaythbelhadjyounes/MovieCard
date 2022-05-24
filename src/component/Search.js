import React, { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import MovieList from "./MovieList";
function Search() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="Home">Movies Time</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavDropdown
                title="Gender"
                id="navbarScrollingDropdown"
                style={{ marginLeft: "50%" }}
              >
                <NavDropdown.Item href="Fantazy">Fantazy</NavDropdown.Item>
                <NavDropdown.Item href="Horror">Horror</NavDropdown.Item>
                <NavDropdown.Item href="Action">Action</NavDropdown.Item>
                <NavDropdown.Item href="Romantic">Romantic</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(event) => setSearch(event.target.value)}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <MovieList input={search} />
    </div>
  );
}

export default Search;
