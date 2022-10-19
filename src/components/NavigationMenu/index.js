import React, { useState } from 'react'
import * as S from './styles.js'
import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/index.js'
import About from '../../pages/About/index.js'
import Skills from '../../pages/Skills/index.js'
import Projects from '../../pages/Projects/index.js'
import Contact from '../../pages/Contact/index.js'
import { FiMenu } from 'react-icons/fi'
import { HiOutlineX, HiOutlineCode } from 'react-icons/hi'
import { MdWorkOutline } from 'react-icons/md'
import { IoHomeOutline, IoPersonOutline, IoChatbubblesOutline } from 'react-icons/io5'

export default function NavigationMenu({ isDark }) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <Router>
      <S.NavContainer isOpen={isOpen} >
        <S.NavToggler onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          {isOpen ? <HiOutlineX style={{color: 'var(--highlightColor)'}} /> : <FiMenu style={{color: 'var(--highlightColor)'}} />}
        </S.NavToggler>

        <S.Logo isOpen={isOpen}>
          <S.FirstElement></S.FirstElement>
          <S.LogoTitle><span>{'//'}</span>HAMOM SILVA</S.LogoTitle>
          <S.LogoSubTitle>Frontend Developer</S.LogoSubTitle>
          <S.SecondElement></S.SecondElement>
        </S.Logo>

        <S.NavMenu>
          <S.Ul>
            <S.Li className='home' isDark={isDark}>
              <S.NavLink to='/home' isOpen={isOpen} isDark={isDark}>
                <i><IoHomeOutline /></i>
                <span>{t('home')}</span>
              </S.NavLink>
            </S.Li>
            <S.Li className='about' isDark={isDark}>
              <S.NavLink to='/about' isOpen={isOpen} isDark={isDark}>
                <i><IoPersonOutline /></i>
                <span>{t('about')}</span>
              </S.NavLink>
            </S.Li>
            <S.Li className='skills' isDark={isDark}>
              <S.NavLink to='/skills' isOpen={isOpen} isDark={isDark}>
                <i><HiOutlineCode /></i>
                <span>{t('skills')}</span>
              </S.NavLink>
            </S.Li>
            <S.Li className='projects' isDark={isDark}>
              <S.NavLink to='/projects' isOpen={isOpen} isDark={isDark}>
                <i><MdWorkOutline /></i>
                <span>{t('projects')}</span>
              </S.NavLink>
            </S.Li>
            <S.Li className='contact' isDark={isDark}>
              <S.NavLink to='/contact' isOpen={isOpen} isDark={isDark}>
                <i><IoChatbubblesOutline /></i>
                <span>{t('contact')}</span>
              </S.NavLink>
            </S.Li>
          </S.Ul>
        </S.NavMenu>
      </S.NavContainer>

      <Routes>
        <Route path='*' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects isDark={isDark} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}