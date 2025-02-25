import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

import 'react-perfect-scrollbar/dist/css/styles.css'

import { ApolloWrapper } from './ApolloWrapper'
import { getSystemMode } from '@core/utils/serverHelpers'
import { formatDateToIndonesian } from '@/utils/dateUtils';

import '@/app/globals.css'

import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Vuexy - MUI Next.js Admin Dashboard Template',
  description:
    'Vuexy - MUI Next.js Admin Dashboard Template - is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.'
}


const RootLayout = async props => {
  const { children } = props

  const systemMode = await getSystemMode()
  const direction = 'ltr'

  const formattedDate = formatDateToIndonesian(new Date());

  return (
    <html id='__next' lang='en' dir={direction} suppressHydrationWarning>
      <body className='flex flex-col flex-auto is-full min-bs-full'>
        <InitColorSchemeScript attribute='data' defaultMode={systemMode} />
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </body>
    </html>
  )
}

export default RootLayout
