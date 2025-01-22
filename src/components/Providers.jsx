import { ApolloProvider } from '@apollo/client';
import client from 'src/graphql/client';

// Context Imports
import { VerticalNavProvider } from '@menu/contexts/verticalNavContext'
import { SettingsProvider } from '@core/contexts/settingsContext'
import ThemeProvider from '@components/theme'

// Util Imports
import { getMode, getSettingsFromCookie, getSystemMode } from '@core/utils/serverHelpers'

const Providers = async props => {
  // Props
  const { children, direction } = props

  // Vars
  const mode = await getMode()
  const settingsCookie = await getSettingsFromCookie()
  const systemMode = await getSystemMode()

  return (
    <VerticalNavProvider>
      <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
        <ThemeProvider direction={direction} systemMode={systemMode}>
          <ApolloProvider client={client}>
            {children}
          </ApolloProvider>
        </ThemeProvider>
      </SettingsProvider>
    </VerticalNavProvider>
  )
}

export default Providers
