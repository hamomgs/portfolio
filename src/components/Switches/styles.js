import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 60px;
  right: 0px;
  z-index: 10;
  width: 200px;
  padding: 15px;
  border: solid 1px transparent;
  transform: translateX(${({ isOpen }) => isOpen  ? '-25px' : '100%'});
  transition: transform 0.3s ease;
`

export const OpenSettingsBtn = styled.button`
  position: absolute;
  top: 15px;
  right: ${({ isOpen }) => isOpen ? '130px' : '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 20px;
  cursor: pointer;
  background: ${({ theme }) => theme.secondaryBgColor};
  border: solid 1px ${({ theme }) => theme.tertiaryBgColor};
  margin-right: 25px;
  transition: all 0.3s ease;
  border-radius: ${({ isOpen }) => isOpen ? '5px' : '50%'};

  @media (min-width: 1200px) {
    right: ${({ isOpen }) => isOpen ? '130px' : '95%'};
  }
`

export const SwitchesContainer = styled.div`
  
`

