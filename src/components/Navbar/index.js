import React, {useState, useEffect} from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/logo.png';

function Navbar({toggle}) {

    const [scrollNav, setScrollNav] = useState(false);

    function changeNav() {
        if(window.scrollY >= 80)
        {
            setScrollNav(true);
        }
        else
        {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    function toggleHome() {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color:'green'}} >
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}><img src={logo} alt="Empowerment Foundation" width="180px" height="110px"/></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Message" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Message</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Mission" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Mission</NavLinks>
                        </NavItem>
                    <NavBtn>
                        <NavBtnLink to="Donate" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Donate</NavBtnLink>
                    </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
