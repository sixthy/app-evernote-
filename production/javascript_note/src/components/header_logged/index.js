import React, { Fragment, useState } from 'react';
import { Navbar, Container, Column, Button, Dropdown } from 'rbx';
import LogoImage from '../../assets/images/logob.png';
import "../../styles/header.scss";
import UserService from '../../services/users';
import { Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { NavbarBurger } from 'rbx/components/navbar/navbar-burger';


function HeaderLogged(props) {
    const [navigateToHome, setNavigateToHome] = useState(false);

    const logOut = async () => {
        await UserService.logout();
        setNavigateToHome(true);
    }
    if (navigateToHome == true)
        return <Navigate to={{ pathname: "/" }} />
    return (
        <Navbar color="custom-purple" className="navbar-logged">
            <Navbar.Brand>
                <Column.Group>
                    <Column size="11" offset="1">
                        <Link to="/notes">
                            <img src={LogoImage} alt="logo" />
                        </Link>
                    </Column>
                </Column.Group>
                <Navbar.Burger
                    className='navbar-burger burger'
                    arial-label="menu"
                    aria-expanded="false"
                    data-target="navbar-menu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Navbar.Burger>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Segment as="div" className="navbar-item navbar-start" align="start">
                    <Navbar.Item as="div">
                        <Button
                            className="open-button"
                            color="white"
                            outlined
                            onClick={() => props.setIsOpen(true)}>
                            <FontAwesomeIcon icon={faList} />
                        </Button>
                    </Navbar.Item>
                </Navbar.Segment>
                <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                    <Navbar.Item as="div">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <Button color="custom-purple" className="navbar-item">
                                    <span>Gabriel ▼</span>
                                </Button>
                            </Dropdown.Trigger>
                            <Dropdown.Menu>
                                <Dropdown.Content>
                                    <Dropdown.Item as="div">
                                        <Link to="/users/edit">Users Edit</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as="div">
                                        <a href="#" onClick={e => logOut()}>Logout</a>
                                    </Dropdown.Item>
                                </Dropdown.Content>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    )
}

export default HeaderLogged;