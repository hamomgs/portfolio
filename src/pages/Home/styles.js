import styled from 'styled-components'
import { Link } from 'react-router-dom'
import react from '../../assets/techIcons/react.svg'
import html from '../../assets/techIcons/html5.svg'
import css from '../../assets/techIcons/css3.svg'
import git from '../../assets/techIcons/git.svg'
import javascript from '../../assets/techIcons/javascript.svg'
import vscode from '../../assets/techIcons/vscode.svg'
import github from '../../assets/techIcons/github.svg'
import mysql from '../../assets/techIcons/mysql.svg'
import trello from '../../assets/techIcons/trello.svg'
import npm from '../../assets/techIcons/npm.svg'
import node from '../../assets/techIcons/nodejs.svg'
import sComponents from '../../assets/techIcons/styled-components.png'

export const HomeSection = styled.section`
  /* position: relative; */
  /* left: ${({ isOpen }) => isOpen ? '270px' : '0'}; */
  /* width: ${({ isOpen }) => isOpen ? 'calc(100% - 270px)' : '100%'}; */

  display: flex;
  flex-direction: column;
  gap: 45px;
  justify-content: space-between;
  align-items: center;
  max-width: 1075px;
  min-height: 85vh;
  transition: all 0.3s ease;
  margin: auto;
  padding: 25px;
  
  @media (min-width: 1200px) {
    position: relative;
    left: 50px;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100vh;
  }
`

export const InfoContainer = styled.div`
  max-width: 100%;

  @media (min-width: 1200px) {
    width: 50%;
  }
`

export const LittleTitle = styled.p`
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 40px;
  font-weight: bold;
  margin: 15px 0;
  
  * {
    color: var(--highlightColor);
  }
`

// export const SubTitle = styled.h3`
//   color: ${({ theme }) => theme.primaryTextColor};
//   font-size: 25px;
//   font-weight: bold;
//   margin: 15px 0;
//   display: flex;
//   gap: 10px;

//   span {
//     color: var(--highlightColor)
//   }
// `

export const P = styled.p`
  /* max-width: 90%; */
  color: ${({ theme }) => theme.secondaryTextColor};
  margin-bottom: 50px;

  span {
    color: var(--highlightColor);
  }
`

export const MoreAboutMe = styled(Link)`
  padding: 12px 35px;
  color: #fff;
  border-radius: 40px;
  background-color: var(--highlightColor);
`

export const Sphere = styled.div`
  color: var(--highlightColor);
  z-index: -99;

  .tagcloud--item {
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
  }

  .tagcloud--item:nth-child(1) {
    background-image: url(${react});
  }

  .tagcloud--item:nth-child(2) {
    background-image: url(${html});
  }

  .tagcloud--item:nth-child(3) {
    background-image: url(${css});
  }

  .tagcloud--item:nth-child(4) {
    background-image: url(${javascript});
  }

  .tagcloud--item:nth-child(5) {
    background-image: url(${git});
  }

  .tagcloud--item:nth-child(6) {
    background-image: url(${github});
  }

  .tagcloud--item:nth-child(7) {
    background-image: url(${vscode});
  }

  .tagcloud--item:nth-child(8) {
    background-image: url(${mysql});
  }

  .tagcloud--item:nth-child(9) {
    background-image: url(${trello});
  }

  .tagcloud--item:nth-child(10) {
    background-image: url(${npm});
  }

  .tagcloud--item:nth-child(11) {
    background-image: url(${node});
  }

  .tagcloud--item:nth-child(12) {
    background-image: url(${sComponents});
    background-size: 100%;
  }

  /* @media (max-width: 1200px) {
    width: 50%;
    border: solid;
  } */
`

/* 
   ", " ", "JavaScript",
      "CSS3", "Git", "GitHub",
      "Styled Components", "ReactJS", "SQL",
      "Oracle SQL", ""
*/