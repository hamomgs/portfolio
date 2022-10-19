import styled from 'styled-components'

export const ThemeSwitcherBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 80px;
  z-index: 1;
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
  border-radius: 5px;
`