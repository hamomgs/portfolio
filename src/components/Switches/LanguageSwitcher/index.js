import React from 'react'
import * as S from './styles.js'
import Us from '../../../assets/flags/us.svg'
import Br from '../../../assets/flags/br.svg'
import { useTranslation } from 'react-i18next'
import { FaGlobe } from 'react-icons/fa'

const languageOptions = [
  {
    name: "English",
    value: "en",
    flag: Us
  },
  {
    name: "Português",
    value: "ptBR",
    flag:  Br
  }
]

export default function LanguageSwitcher({ isOpen, setIsOpen, showColors, setShowColors }) {
  const { t, i18n } = useTranslation()

  function showOptions() {
    setIsOpen(true)
    if (!showColors && isOpen) {
      setIsOpen(false)
    }
    setShowColors(false)
  }
 
  return (
    <div>
      <S.LanguageSwitcherBtn onClick={() => showOptions()} title={t('changeLanguage')}>
        <FaGlobe />
      </S.LanguageSwitcherBtn>

      <S.Container showColors={showColors}>
        <S.Title>{t("language")}</S.Title>

        <S.LanguagesContainer>
          {languageOptions.map((item, index) => (
            <S.LanguageBtn
              key={index} 
              onClick={() => i18n.changeLanguage(item.value)}
              title={item.name}
            >
              <S.FlagIcon src={item.flag} alt={`${item.name} ${t('flag')}`} />
              {item.name}
            </S.LanguageBtn>
          ))}
        </S.LanguagesContainer>
      </S.Container>
      
    </div>
  )
}