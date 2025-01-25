import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

import 'react-perfect-scrollbar/dist/css/styles.css'

import { getSystemMode } from '@core/utils/serverHelpers'

import '@/app/globals.css'

import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Vuexy - MUI Next.js Admin Dashboard Template',
  description:
    'Vuexy - MUI Next.js Admin Dashboard Template - is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.'
}

const checkUserRoleAndToken = () => {
  const storedUser = localStorage.getItem('user')

  if (storedUser) {
    try {
      const parsedUser = JSON.parse(storedUser)
      const { role, token } = parsedUser

      if (!token || !role) {
        throw new Error('Invalid token or role')
      }

      // Add more role-based logic here if needed
    } catch {
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
  } else {
    window.location.href = '/login'
  }
}

const RootLayout = async props => {
  const { children } = props

  const systemMode = await getSystemMode()
  const direction = 'ltr'

  checkUserRoleAndToken()

  return (
    <html id='__next' lang='en' dir={direction} suppressHydrationWarning>
      <body className='flex flex-col flex-auto is-full min-bs-full'>
        <InitColorSchemeScript attribute='data' defaultMode={systemMode} />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
