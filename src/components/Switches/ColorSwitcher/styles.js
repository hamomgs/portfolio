import styled from 'styled-components'

export const ColorSwitcherBtn = styled.button`
  position: absolute;
  right: -20px;
  top: 15px;
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

export const Container = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  display: ${({ showColors }) => showColors ? 'initial' : 'none'};
  width: 200px;
  height: 120px;
  padding: 0 15px;
  border: 1px solid ${({ theme }) => theme.tertiaryBgColor};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.secondaryBgColor};
`

export const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`

export const Title = styled.h4`
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.primaryTextColor};
  margin: 5px 0 8px 0;
`

export const ColorBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme, i }) => theme.highlightColor[i]};
`