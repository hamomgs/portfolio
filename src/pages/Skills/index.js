import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles.js'
import react from '../../assets/techIcons/react.svg'
import html from '../../assets/techIcons/html5.svg'
import css from '../../assets/techIcons/css3.svg'
import git from '../../assets/techIcons/git.svg'
import javascript from '../../assets/techIcons/javascript.svg'
import vscode from '../../assets/techIcons/vscode.svg'
import github from '../../assets/techIcons/github.svg'
import mysql from '../../assets/techIcons/mysql.svg'
import trello from '../../assets/techIcons/trello.svg'
import npm from '../../assets/techIcons/npm.svg'
import sComponents from '../../assets/techIcons/styled-components.png'

export default function Skills() {
  const { t } = useTranslation()
  const images = [html, css, javascript, react, sComponents, git, github, npm, mysql, vscode, trello ]

  useEffect(() => {
    document.querySelectorAll('nav>ul>li')
    .forEach(item => {
      if (item.classList.contains('skills')) {
        item.classList.add('selected')
      } else {
        item.classList.remove('selected')
      }
    })
  })

  return (
    <S.SkillsSection>
      <h2>{t('skills')}</h2>
      <S.Container>
        {images.map((item, index) => (
          <S.IconContainer key={index}>
            <img src={item} alt="" />
          </S.IconContainer>
        ))}
      </S.Container>
    </S.SkillsSection>
  )
}