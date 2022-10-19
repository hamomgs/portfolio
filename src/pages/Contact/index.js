import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import * as S from './styles.js'
import { SiGmail } from 'react-icons/si'
import { BsLinkedin, BsDiscord, BsInstagram } from 'react-icons/bs'


export default function Contact() {
  const form = useRef()
  const { t } = useTranslation()

  useEffect(() => {
    document.querySelectorAll('nav>ul>li')
    .forEach(item => {
      if (item.classList.contains('contact')) {
        item.classList.add('selected')
      } else {
        item.classList.remove('selected')
      }
    })
  })

  function sendEmail() {
    emailjs.sendForm('service_346qksh', 'template_mh2rxtb', form.current, 'iTJ4bpJ65A6Pjgvpk')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
  }

  return (
    <S.ContactSection>
      <S.Title>{t('contact')}</S.Title>
      <S.Container>
        <S.Form ref={form} onSubmit={e => {sendEmail(); e.preventDefault()}}>
          <S.NameEmailContainer>
            <S.Input type='text' name='user_name' placeholder={t('name')} required />
            <S.Input type='email' name='user_email' placeholder={t('email')} required />
          </S.NameEmailContainer>
          <S.Input type='text' name='subject' placeholder={t('subject')} required/>
          
          <S.InputMsg name='message' placeholder={t('message')} required />
          <S.SubmitBtn type='submit' value={t('sendBtn')} />
        </S.Form>

        <S.SocialMedias>
          <a href='mailto:hamomgomer947@gmail.com'>
            <SiGmail />
            hamomgomer947@gmail.com
          </a>
          <a href='https://www.linkedin.com/in/hamomgs/'>
            <BsLinkedin />
            @hamomgs
          </a>
          <a href='https://discord.com/users/435434415880011777'>
            <BsDiscord />
            hamomgs#0719
          </a>
          <a href='https://www.instagram.com/hamomgs/'>
            <BsInstagram />
            @hamomgs
          </a>
        </S.SocialMedias>
      </S.Container>
    </S.ContactSection>
  )
}