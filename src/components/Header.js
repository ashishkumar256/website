// src/components/Header.js
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineMenu, AiOutlineBell } from 'react-icons/ai';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #4267B2;
  color: white;
  position: relative;
`;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   cursor: pointer;

//   &:hover {
//     color: yellow;
//   }
// `;

const MenuActions = styled.div`
  display: flex;
  gap: 20px;
`;

const ActionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  
  &:hover {
    color: yellow;
  }
`;

const Navigation = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  top: 60px;
  right: 20px;
  width: 200px;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
`;

const NavItem = styled.div`
  padding: 10px 20px;
  color: black;
  text-decoration: none;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: white; // Your preferred color
  text-decoration: none;

  &:hover {
    color: yellow; // Your preferred hover color
  }

  // Add the following:
  &:visited, &:focus {
    color: white; // Use the same color as the default state to avoid change
  }

  &:active {
    color: white; // Use the same color as the default state when clicked
  }
`;

function Header() {
    const [showNav, setShowNav] = useState(false);

    const handleMenuClick = () => {
        setShowNav(!showNav);
    };

    useEffect(() => {
        // Function to hide nav if clicked outside of
        const handleClickOutside = (event) => {
            if (!navRef.current?.contains(event.target)) {
                setShowNav(false);
            }
        }
        // Add event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navRef = useRef();

    return (
        <HeaderWrapper>
            <Logo as={Link} to="/">
                <AiOutlineHome />
                Home
            </Logo>
            <MenuActions>
                <ActionItem onClick={handleMenuClick}>
                    <AiOutlineMenu />
                    Menu
                </ActionItem>
                <ActionItem>
                    <AiOutlineBell />
                    Notification
                </ActionItem>
            </MenuActions>
            <Navigation ref={navRef} show={showNav}>
                <Link to="/flowers"><NavItem>Flower Plants</NavItem></Link>
                <Link to="/products"><NavItem>Flower Products</NavItem></Link>
            </Navigation>
        </HeaderWrapper>
    );
}

export default Header;