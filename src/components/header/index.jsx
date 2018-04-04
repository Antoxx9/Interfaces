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
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUserCircle, faHome, faQuestionCircle, faSignOutAlt } from '@fortawesome/fontawesome-free-solid';
import {faAutoprefixer} from '@fortawesome/fontawesome-free-brands';
import './styles.scss';

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
      <Navbar className="header" color="faded" expand="md">
        <NavbarBrand className="logo" href="/">
          <FontAwesomeIcon icon={faAutoprefixer} size={'2x'} />
          <span className='name'>AUTISMOVIDA</span>
        </NavbarBrand>
        <NavbarToggler className="" onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.props.logged &&
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
            }
            {this.props.logged &&
            <NavItem>
              <NavLink href='/profile' title='Editar Perfil'>
                <FontAwesomeIcon className='icon' icon={faUserCircle} />
              </NavLink>
            </NavItem>
            }
            <NavItem>
              <NavLink href='/about' title='Ayuda'>
                <FontAwesomeIcon className='icon' icon={faQuestionCircle}  />
              </NavLink>
            </NavItem>
            {this.props.logged &&
            <NavItem>
              <NavLink href='/' title='Sing-Out'>
                <FontAwesomeIcon className='icon' icon={faSignOutAlt} />
              </NavLink>
            </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;