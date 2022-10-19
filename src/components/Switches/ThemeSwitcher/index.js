import React from 'react'
import * as S from './styles.js'
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTranslation } from 'react-i18next';


export default function ThemeSwitcher({ click, isDark }) {
  const { t } = useTranslation()
  const iconTheme = isDark ? <BsFillSunFill /> : <BsFillMoonFill />

  return (
    <S.ThemeSwitcherBtn
      onClick={click}
      isDark={isDark}
      title={isDark ? t("switchLightMode") : t("switchDarkMode")}
    >
      {iconTheme}
    </S.ThemeSwitcherBtn>
  )
}