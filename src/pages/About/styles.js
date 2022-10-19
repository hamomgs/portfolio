import styled from 'styled-components'

export const AboutSection = styled.section`
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