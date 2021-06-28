import React from 'react';
import { FaBars} from 'react-icons/fa';
import {Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink 
    } from './NavbarElements';


const Navbar = () => {
    return(
        <>
        
        <Nav>
            <NavbarContainer>

                <NavLogo to='/'>Spend</NavLogo>
                 <MobileIcon> <FaBars /></MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>Pages</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>SignUp</NavLinks>
                    </NavItem>
                </NavMenu>

            </NavbarContainer>
        </Nav>
        
        
        
        </>
    )
}
export default Navbar