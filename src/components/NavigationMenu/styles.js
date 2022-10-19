import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.div`
  position: fixed;
  right: ${({ isOpen }) => isOpen ? '0' : '-270px'};
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  width: 270px;
  height: 100%;
  border-right: solid 1px ${({ theme }) => theme.tertiaryBgColor};
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.secondaryBgColor};

  @media (min-width: 1200px) {
    left: 0;
    width: 100px;
    transition: all 0.5s ease;
    overflow: hidden;

    &:hover {
      width: 220px;
      span {
        display: initial;
      }
    }
  }
`

export const Logo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  transform: scale(0.85);

  @media (min-width: 1200px) {
    position: absolute;
    top: 50px;
    align-items: center;
    height: 90px;
    margin-left: -10px;
    
    ${NavContainer}:hover & {
      margin: 0;
    }
  }
`

const showUp = keyframes`
  100% {
    visibility: visible;
  }
`

export const LogoTitle = styled.h2`
  position: absolute;
  top: 0;
  height: 28px;
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.primaryTextColor};
  letter-spacing: 2px;

  span {
    display: none;
  }

  @media (min-width: 1200px) {
    position: relative;
    inset: unset;
    font-size: 18px;
    visibility: hidden;
    
    span {
      font-size: 16px;
      margin-right: 3px;
      letter-spacing: -1px;
    }
    
    ${NavContainer}:hover & {
      animation: ${showUp} 0s ease 0.3s forwards;      
    }
  }
`

export const LogoSubTitle = styled.h2`
  position: absolute;
  top: 30px;
  height: 28px;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.primaryTextColor};
  font-weight: normal;

  @media (min-width: 1200px) {
    position: relative;
    inset: unset;
    font-size: 16px;
    visibility: hidden;

    ${NavContainer}:hover & {
      animation: ${showUp} 0s ease 0.3s forwards;
    }
  }
`

export const FirstElement = styled.div`
  position: absolute;
  top: -15px;
  left: 25px;
  z-index: 1;
  background: var(--highlightColor);
  width: 50px;
  height: 50px;
  clip-path: polygon(0 20%, 0 100%, 20% 80%, 20% 20%, 80% 20%, 100% 0, 20% 0);

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 20%;
    height: 20%;
    background: var(--highlightColor);
    filter: brightness(0.5);
  }

  @media (min-width: 1200px) {
    inset: unset;
    width: 45px;
    height: 45px;
    margin-left: 15px;
    transform: rotate(135deg);
    transition: all 0.3s ease;
    
    ${NavContainer}:hover & {
      right: 5px;
      bottom: 5px;
      transform: rotate(180deg);
    }
  }
`

export const SecondElement = styled.div`
  position: absolute;
  bottom: -15px;
  right: 25px;
  z-index: 1;
  background: var(--highlightColor);
  width: 50px;
  height: 50px;
  clip-path: polygon(80% 100%, 0 100%, 20% 80%, 80% 80%, 80% 20%, 100% 0, 100% 80%);

  &:before {
    position: absolute;
    bottom: 0;
    right: 0;
    content: "";
    width: 20%;
    height: 20%;
    background: var(--highlightColor);
    filter: brightness(0.5);
  }

  @media (min-width: 1200px) {
    inset: unset;
    transform: rotate(135deg);
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
    
    ${NavContainer}:hover & {
      left: 5px;
      top: 0;
      transform: rotate(180deg);
    }
  }
`

export const NavToggler = styled.button`
  position: fixed;
  top: 25px;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 20px;
  cursor: pointer;
  border: ${({ isOpen, theme }) => isOpen ? 'none' : `solid 1px ${theme.tertiaryBgColor}`};
  transition: left 0.3s ease;
  background-color: ${({ theme }) => theme.secondaryBgColor};

  @media (min-width: 1200px) {
    display: none;
  }
`

export const NavMenu = styled.nav`
  @media (min-width: 1200px) {
    width: 100%;
    position: absolute;
    top: 36%;
  }
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1200px) {
    width: 100%;
    margin-left: 20px;
  }
`

export const Li = styled.li`
  font-size: 16px;
  color: ${({ theme }) => theme.primaryTextColor};

  &.selected  {
    span, i {
      color: var(--highlightColor);
    }

    @media (max-width: 1199px) {
      border-radius: 6px;
      background: ${({ isDark }) => isDark ? '#303030' : '#e9e9e9'};
      box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
    }
  }

  @media (min-width: 1200px) {
    border: none;
    font-size: 25px;
  }
`

export const NavLink = styled(Link)`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primaryTextColor};
  font-weight: 600;
  padding: 5px 15px;
  transition: all 0.3s ease;

  &:hover {
    border-radius: 6px;
    background: ${({ isDark }) => isDark ? '#303030' : '#e9e9e9'};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2);

    @media (max-width: 1199px) {
      box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
    }
  }
  /* background: ${({ theme }) => `${theme.primaryBgColor}80`}; */

  /* &:after {
    content: '.';
    position: absolute;
    z-index: 1111;
    bottom: -8px;
    width: 5px;
    height: 0%;
    text-align: left;
    opacity: 0;
    color: transparent;
    transition: all 0.5s;
    background-color: var(--highlightColor);
  }
  
  &:hover:after {
    height: 100%;
    z-index: -10;
    animation: fill 1s forwards;
    -webkit-animation: fill 1s forwards;
    -moz-animation: fill 1s forwards;
    opacity: 1;
  } */

  i {
    display: flex;
    margin-right: 15px;
  }
    
  @media (min-width: 1200px) {
    width: 80%;

    span {
      display: none;
      font-size: 16px;
    }
    
  }
`