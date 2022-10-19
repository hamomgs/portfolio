import React, { useEffect, useMemo, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import * as S from './styles.js'

export default function Home() {
  const { t } = useTranslation()
  const [isTrue, setIsTrue] = useState(false)

  useEffect(() => {
    document.querySelectorAll('nav>ul>li')
    .forEach(item => {
      if (item.classList.contains('home')) {
        item.classList.add('selected')
      } else {
        item.classList.remove('selected')
      }
    })
  })
   

  const options = useMemo(() => {
    const responsiveValue = () => {
      if (window.screen.width >= 1200) {
        return 210
      } else if (window.screen.width < 1200) {
        return 150
      }
    }

    return {
      radius: responsiveValue(),
      maxSpeed: 'fast',
      initSpeed: 'normal',
      direction: 135,
      keep: true
    }
  }, [])

  useEffect(() => {
    const TagCloud = require('TagCloud')
    const texts = [
      '', '', '',
      '', '', '',
      '', '', '',
      '', '', ''
    ]

    setIsTrue(true)

    if (isTrue) {
      TagCloud('.tagcloud', texts, options)
    }
  }, [isTrue, options])

  return (
    <S.HomeSection>
      <S.InfoContainer>
        <S.LittleTitle>
          {t('hiThere')}
        </S.LittleTitle>
        <S.Title>
          <span>Hamom</span> Silva
        </S.Title>
        <S.P>
          <Trans i18nKey='homeDescription'>
            A <span>Frontend Developer</span> with a curious mind
            who enjoys solving a complex and challenging problem. Always looking for new knowledge. 
          </Trans>
        </S.P>
        <S.MoreAboutMe to='/about'>
          {t('moreAboutMe')}
        </S.MoreAboutMe>
      </S.InfoContainer>
      <S.Sphere className='tagcloud'></S.Sphere>
    </S.HomeSection>
  )
}