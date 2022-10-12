import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);
  return (
    <Styles.Wrapper>
      <Navbar.Wrapper>
        <Navbar.Logo>
          {/* <svg
            width="32"
            height="32"
            className="_1Jlgk"
            version="1.1"
            viewBox="0 0 32 32"
            aria-labelledby="unsplash-home"
            aria-hidden="false"
          >
            <title id="unsplash-home">Unsplash Home</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg> */}
        </Navbar.Logo>

        <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
          <HamburgerButton.Lines />
        </HamburgerButton.Wrapper>

        <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
          <Navbar.Item>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="/" className="nav-item">
              About
            </Link>
          </Navbar.Item>

          <Navbar.Item>
            <FontAwesomeIcon
              className="nav-icon nav-icon-lg"
              icon={faUserCircle}
            />
          </Navbar.Item>
        </Navbar.Items>
      </Navbar.Wrapper>
    </Styles.Wrapper>
  );
}

const Styles = {
  Wrapper: styled.header`
    display: flex;
    color: grey;
  `,
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 0.3rem 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    // 40em == 640px
    @media only screen and (max-width: 40em) {
      position: fixed;
      width: 100vw;
      top: 0;
      z-index: 100;
    }
  `,
  Logo: styled.div`
    padding: 0.5rem 1rem;

    @media only screen and (max-width: 40em) {
      padding: 0.5rem 0;
      & > svg {
        fill: white;
      }
    }
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
    align-items: center;

    @media only screen and (max-width: 40em) {
      position: fixed;
      right: 0;
      top: 0;
      background: white;

      height: 100%;
      width: 13rem;
      -webkit-box-shadow: -2px 0 7px 0 #c2c2c2;
      box-shadow: -2px 0 7px 0 #c2c2c2;

      flex-direction: column;

      padding: 1rem 2rem;

      transition: 0.2s ease-out;

      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
    font-size: 1rem;

    & > .nav-item,
    & > .navicon {
      color: grey;
      text-decoration: none;
      padding: 0.5rem 0rem;
    }
    & > .nav-icon {
      font-size: 1.2rem;

      &.nav-icon-lg {
        font-size: 2rem;
      }
    }

    & > *:hover {
      color: black;
    }

    @media only screen and (max-width: 40em) {
      margin: 1rem 0;
    }
  `,
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 1rem;
    width: 2.5rem;
    position: relative;
    font-size: 12px;

    display: none;

    @media only screen and (max-width: 40em) {
      display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: black;
      position: absolute;

      @media only screen and (max-width: 40em) {
        background-color: white;
      }
    }

    &:after {
      top: -0.7rem;
    }

    &:before {
      top: 0.7rem;
    }
  `,
};
