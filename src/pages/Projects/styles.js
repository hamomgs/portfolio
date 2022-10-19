import styled from 'styled-components'

export const ProjectsSection = styled.section`
  max-width: 1120px;
  transition: all 0.3s ease;
  margin: 0 auto;
  padding: 25px;
  
  @media (min-width: 1200px) {
    position: relative;
    left: 50px;
    min-height: 100vh;
  }
`

export const Title = styled.h2`
  position: relative;
  font-size: 36px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 50px;
    height: 4px;
    background-color: var(--highlightColor);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 25px;
    height: 4px;
    background-color: var(--highlightColor);
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 90px;
`

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  max-width: 457px;
  width: 100%;
  height: 250px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.secondaryBgColor};

  @media (min-width: 1200px) {
    height: 310px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  overflow: hidden;
  cursor: pointer;

  &:hover + h3 {
    color: var(--highlightColor);
  }
`

export const ProjectImg = styled.img`
  width: 100%;
  transform: scale(1.01);
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`

export const ProjectTitle = styled.h3`
  width: 95%;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
  transition: color 0.2s;
  cursor: pointer;
  background-color: ${({ theme }) => theme.primaryBgColor};

  &:hover {
    color: var(--highlightColor);
  }
`