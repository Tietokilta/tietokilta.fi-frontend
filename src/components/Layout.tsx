import { ThemeProvider } from "styled-components"

import GlobalStyle from "../styles/global-style"
import theme from "../styles/theme"

const Layout: React.FC = (props) => {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>{children}</div>
    </ThemeProvider>
  )
}

export default Layout
