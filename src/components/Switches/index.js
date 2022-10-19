import React, { useState } from 'react'
import * as S from './styles.js'
import ThemeSwitcher from './ThemeSwitcher/index.js'
import LanguageSwitcher from './LanguageSwitcher/index.js'
import ColorSwitcher from './ColorSwitcher/index.js'
import { IoMdSettings } from 'react-icons/io'
import { HiOutlineX } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

export default function Switches({ switchTheme, isDark, setColor }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showColors, setShowColors] = useState(false)
  const { t } = useTranslation()

  return (
    <S.Container isOpen={isOpen}>
      <S.OpenSettingsBtn
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? t('closeSettings') : t('openSettings')}
      >
        {isOpen ? <HiOutlineX /> : <IoMdSettings />}
      </S.OpenSettingsBtn>
      <S.SwitchesContainer>
        <ThemeSwitcher click={switchTheme} isDark={isDark} color={showColors} />
        <LanguageSwitcher isOpen={isOpen} setIsOpen={setIsOpen} showColors={showColors} setShowColors={setShowColors} />
        <ColorSwitcher isOpen={isOpen} setIsOpen={setIsOpen} setColor={setColor} showColors={showColors} setShowColors={setShowColors} />
      </S.SwitchesContainer>
    </S.Container>
  )
}