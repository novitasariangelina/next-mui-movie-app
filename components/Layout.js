import React from 'react'
import MovieCard from './MovieCard'
import Header from './Header'
import LoginModal from './LoginModal'
import { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header OpenModal={() => setOpen(true)} />
      <main>
        <Container maxWidth="xl">
          <Box>
          {children}
          </Box>
        </Container>
      </main>
      <LoginModal open={open} CloseModal={() => setOpen(false)} />
    </>
  )
}

export default Layout