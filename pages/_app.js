import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../utils/theme'
import '../styles/globals.css'
import Layout from '../components/Layout'
import AuthStateChangeProvider from '../context/auth'
import { UserProvider } from '../context/user'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MovieApp</title>
        <meta name="viewport" content="initial-scale-1, width-device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <CssBaseline />
          <UserProvider>
            <AuthStateChangeProvider>
              <Component {...pageProps} />
            </AuthStateChangeProvider>
          </UserProvider>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
