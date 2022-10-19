import React from 'react'
import * as S from './styles.js'
import { IoMdColorPalette, IoIosBrush } from 'react-icons/io'
import { useTranslation } from 'react-i18next'

export default function ColorSwitcher({ isOpen, setIsOpen, setColor, showColors, setShowColors }) {
  const { t } = useTranslation()

  function showOptions() {
    setIsOpen(true)
    if (showColors && isOpen) {
      setIsOpen(false)
    }
    setShowColors(true)
  }

  return (
    <div>
      <S.ColorSwitcherBtn onClick={() => showOptions()} title={t('changeColor')}>
        <IoMdColorPalette />
      </S.ColorSwitcherBtn>

      <S.Container showColors={showColors}>
        <S.Title>{t("themeColors")}</S.Title>

        <S.ColorsContainer>
          <S.ColorBtn onClick={() => setColor(0)} i='0'><IoIosBrush /></S.ColorBtn>
          <S.ColorBtn onClick={() => setColor(1)} i='1'><IoIosBrush /></S.ColorBtn>
          <S.ColorBtn onClick={() => setColor(2)} i='2'><IoIosBrush /></S.ColorBtn>
          <S.ColorBtn onClick={() => setColor(3)} i='3'><IoIosBrush /></S.ColorBtn>
          <S.ColorBtn onClick={() => setColor(4)} i='4'><IoIosBrush /></S.ColorBtn>
          <S.ColorBtn onClick={() => setColor(5)} i='5'><IoIosBrush /></S.ColorBtn>
          <S.ColorBtn onClick={() => setColor(6)} i='6'><IoIosBrush /></S.ColorBtn>
          <S.ColorBtn onClick={() => setColor(7)} i='7'><IoIosBrush /></S.ColorBtn>
        </S.ColorsContainer>
      </S.Container>
      
    </div>
  )
}