import styled from 'styled-components'

export const SkillsSection = styled.section`
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

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 81%;
  margin: 50px auto;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 160px;
  border: solid 1px ${({ theme }) => theme.tertiaryBgColor};
  border-radius: 15px;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.secondaryBgColor};

  img {
    width: 50%;
    transition: all 0.3s ease;
  }

  &:hover {
    border: solid 2px var(--highlightColor);
    
    img {
      transform: scale(1.1);
    }
  }
`