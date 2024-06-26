import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./Styles/global.css"
import { BrowserRouter } from "react-router-dom"
import GlobalProvider from './Store/global/GlobalProvider.jsx'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <GlobalProvider>
      <App />
      </GlobalProvider>
      </BrowserRouter>
    </ChakraProvider>
  
)