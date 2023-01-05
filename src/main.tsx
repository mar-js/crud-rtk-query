import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApiProvider } from '@reduxjs/toolkit/query/react'

import { BrowserRouter } from 'react-router-dom'

import { API_SLICE } from 'api/apiSlice'

import { ChakraProvider } from '@chakra-ui/react'

import { App } from 'App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={ API_SLICE }>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>
)
