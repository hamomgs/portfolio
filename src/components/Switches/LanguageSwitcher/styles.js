import styled from 'styled-components'

export const LanguageSwitcherBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 30px;
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

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 70px;
  display: ${({ showColors }) => showColors ? 'none' : 'initial'};
  width: 100%;
  height: 120px;
  border: solid 1px ${({ theme }) => theme.tertiaryBgColor};
  border-radius: 5px;
  transition: transform 0.3s ease;
  background-color: ${({ theme }) => theme.secondaryBgColor};
`

export const LanguagesContainer = styled.div`
  display: flex;
  height: 80px;
`

export const Title = styled.h4`
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.primaryTextColor};
  margin: 5px 0;
`

export const LanguageBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 12px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`

export const FlagIcon = styled.img`
  width: 50px;
  height: auto;
  border-radius: 5px;
`