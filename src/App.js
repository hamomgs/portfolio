import React, { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles/index.js'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/Theme/index.js'
import './i18n/index.js'
import NavigationMenu from './components/NavigationMenu/index.js'
import Switches from './components/Switches/index.js'

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [colorIndex, setColorIndex] = useState(4)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles index={colorIndex} />
      <NavigationMenu isDark={isDarkTheme} /> 
      <Switches
        switchTheme={() => setIsDarkTheme(!isDarkTheme)} 
        isDark={isDarkTheme} 
        setColor={setColorIndex}
      />
    </ThemeProvider>
  )
}