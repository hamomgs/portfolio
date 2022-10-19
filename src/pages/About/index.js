import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles.js'
import Photo from '../../assets/photo.jpg'

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
      <h2>{t('about')}</h2>
    </S.AboutSection>
  )
}