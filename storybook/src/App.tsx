import { useState } from 'react'
import './App.css'
import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'

function App() { 
  return (
    <>

<IconButton color="default" size="small">
        <Close fontSize="inherit" />
      </IconButton>
      <IconButton  size="small">
        <Close fontSize="inherit" />
      </IconButton>
    </>
  )
}

export default App
