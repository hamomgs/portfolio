import styled from 'styled-components'

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  max-width: 1000px;
  min-height: 90vh;
  transition: all 0.3s ease;
  margin: auto;
  padding: 25px;
  
  @media (min-width: 1200px) {
    position: relative;
    left: 50px;
  }
`

export const Title = styled.h2``

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  input {
    border: solid 1px ${({ theme }) => theme.tertiaryBgColor};
    border-radius: 10px;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`

export const NameEmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  input {
    width: 49%;
    color: ${({ theme }) => theme.primaryTextColor};
  }
`

export const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.primaryTextColor};
  padding: 10px 25px;
  background-color: ${({ theme }) => theme.secondaryBgColor};
`

export const InputMsg = styled.textarea`
  width: 100%;
  min-height: 140px;
  max-height: 300px;
  resize: none;
  padding: 10px 25px;
  color: ${({ theme }) => theme.primaryTextColor};
  border: solid 1px ${({ theme }) => theme.tertiaryBgColor};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.secondaryBgColor};
`

export const SubmitBtn = styled.input`
  width: fit-content;
  padding: 10px 20px;
  border: none;
  color: #fff ;
  cursor: pointer;
  background-color: var(--highlightColor);
`

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 300px;

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    color: ${({ theme }) => theme.primaryTextColor};
    padding: 0 10px;
    background-color: ${({ theme }) => theme.secondaryBgColor};
  }
`