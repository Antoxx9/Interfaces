import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUserCircle, faHome, faQuestionCircle } from '@fortawesome/fontawesome-free-solid'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className='header'>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <span className='name'>Name Of the app</span>
            <FontAwesomeIcon className='icon' icon={faHome} size={'2x'} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className='dropdownButton' nav caret>
                  Juegos
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href='/games/juego1'>
                      Juego1
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href='/games/juego2'>
                      Juego2
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href='/' title='Editar Perfil'>
                  <FontAwesomeIcon className='icon' icon={faUserCircle} size={'2x'} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/' title='Ayuda'>
                  <FontAwesomeIcon className='icon' icon={faQuestionCircle} size={'2x'} />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header