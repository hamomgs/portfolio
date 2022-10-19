import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles.js'
import react from '../../assets/techIcons/react.svg'
import html from '../../assets/techIcons/html5.svg'
import css from '../../assets/techIcons/css3.svg'
import git from '../../assets/techIcons/git.svg'
import javascript from '../../assets/techIcons/javascript.svg'
import vscode from '../../assets/techIcons/vscode.svg'
import mysql from '../../assets/techIcons/mysql.svg'
import heroku from '../../assets/techIcons/heroku.svg'
import oracle from '../../assets/techIcons/oracle.svg'
import sComponents from '../../assets/techIcons/styled-components.png'
import windows from '../../assets/techIcons/windows.svg'
import api from '../../assets/techIcons/api.svg'

export default function Skills() {
  const { t } = useTranslation()
  const skills = [
    {
      name: 'HTML',
      image: html
    },
    {
      name: 'CSS',
      image: css
    },
    {
      name: 'JavaScript',
      image: javascript
    },
    {
      name: 'React',
      image: react
    },
    {
      name: 'Styled C.',
      image: sComponents
    },
    {
      name: 'REST API',
      image: api
    },
    {
      name: 'Git',
      image: git
    },
    {
      name: 'Oracle SQL',
      image: oracle
    },
    {
      name: 'mySql',
      image: mysql
    },
    {
      name: 'Heroku',
      image: heroku
    },
    {
      name: 'VS Code',
      image: vscode
    },
    {
      name: 'Windows',
      image: windows
    }
  ]

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
      <S.Title>{t('skills')}</S.Title>
      <S.SkillsContainer>
        {skills.map((item, index) => (
          <S.IconContainer key={index}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </S.IconContainer>
        ))}
      </S.SkillsContainer>
    </S.SkillsSection>
  )
}