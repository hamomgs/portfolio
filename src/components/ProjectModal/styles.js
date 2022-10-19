import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 85%;
  height: 80%;
  padding: 25px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primaryBgColor};

  @media (min-width: 1200px) {
    width: 50%;
  }
`

export const CloseBtn = styled.button`
  position: absolute;
  right: 25px;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  font-size: 30px;
  color: ${({ theme }) => theme.primaryTextColor};
  cursor: pointer;
  background-color: transparent;
`

export const ProjectImage = styled.img`
  width: 100%;

  @media (min-width: 1200px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const Title = styled.h2`
  color: var(--highlightColor);
  font-size: 30px;
`

export const P = styled.p`
  span {
    font-weight: bold;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  background-color: var(--highlightColor);
`