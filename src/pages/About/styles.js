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

export const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 90px;

  p {
    /* width: 40%; */
  }
`

export const InfoContainer = styled.div`
  width: 50%;
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }

  li {
    list-style: inside;
  }

  button {
    padding: 12px 35px;
    color: #fff;
    border-radius: 40px;
    margin-top: 20px;
    cursor: pointer;
    background-color: var(--highlightColor);
  }
`

export const Test = styled.div`
  width: 340px;
  height: 340px;
  background-color: ${({ theme }) => theme.secondaryBgColor};
`