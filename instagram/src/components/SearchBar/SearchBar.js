import React, { Component } from 'react'
import { Navbar, Button, Nav, NavItem, NavDropdown, DropdownItem, MenuItem } from 'reactstrap'

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: ''
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search input: ', this.state.searchInput);
        this.setState({ searchInput: '' });
    }

    handleSearchInput = (e) => {
        this.setState({ searchInput: e.target.value });
    }

    render() {
        return (
           <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <DropdownItem>Action</DropdownItem>
      <DropdownItem>Another action</DropdownItem>
      <DropdownItem>Something else here</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Separated link</DropdownItem>
    </NavDropdown>
  </Nav>
</Navbar>
        )
    }
}

export default SearchBar;