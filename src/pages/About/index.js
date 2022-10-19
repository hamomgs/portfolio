import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles.js'
// import Photo from '../../assets/photo.jpg'

export default function About({ isOpen }) {
  const { t } = useTranslation()

  useEffect(() => {
    document.querySelectorAll('nav>ul>li')
    .forEach(item => {
      if (item.classList.contains('about')) {
        item.classList.add('selected')
      } else {
        item.classList.remove('selected')
      }
    })
  })

  return (
    <S.AboutSection isOpen={isOpen}>
      <S.Title>{t('about')}</S.Title>
      <S.Container>
        <S.Test>
        </S.Test>
        <S.InfoContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            dicta, exercitationem quos nostrum placeat hic, quo eos repellat
            autem, soluta deleniti.
          </p>
          <ul>
            <li>Birthday: 99 lorem 9999</li>
            <li>City: Lorem, LR</li>
            <li>Social Medias: @lorem</li>
            <li>Email: lorem@email.com</li>
          </ul>
          <button>
            Download CV
          </button>
        </S.InfoContainer>

      </S.Container>
    </S.AboutSection>
  )
}