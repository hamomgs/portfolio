import styled from 'styled-components'

export const SkillsSection = styled.section`
  max-width: 1120px;
  transition: all 0.3s ease;
  margin: 0 auto;
  padding: 25px;
  
  @media (min-width: 1200px) {
    position: relative;
    left: 50px;
    /* display: flex;
    justify-content: center;
    flex-direction: column; */
    /* min-height: 90vh; */
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

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 90px;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 150px;
  height: 150px;
  border: solid 1px ${({ theme }) => theme.tertiaryBgColor};
  border-radius: 15px;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.secondaryBgColor};

  img {
    width: 50%;
    transition: all 0.3s ease;
  }

  p {
    /* font-size: 10px; */
  }

  &:hover {
    border-color: var(--highlightColor);
    
    img {
      transform: scale(1.1);
    }
  }
`