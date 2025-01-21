import { createContext } from 'react';
import CustomHook from './hooks/AppContext.jsx';
import ApplicationRoutes from './routers/index.jsx';
import Auth from './hooks/Auth.jsx';
import { IntlProvider } from 'react-intl';
import Locale from './hooks/Locale.jsx';
import ErrorBoundary from './ErrorBoundry.jsx';

export const ApplicationContext = createContext(null);
export const AuthContext = createContext(null);

export default function App() {
  const [context, setConext] = CustomHook();
  const [auth, setAuth] = Auth();
  const lang = context.lang;

  return (
    <IntlProvider messages={Locale(lang)} locale="en" defaultLocale="en">
      <ApplicationContext.Provider value={[context, setConext]}>
        <AuthContext.Provider value={[auth, setAuth]}>
            <ErrorBoundary>
              <ApplicationRoutes />
            </ErrorBoundary>
        </AuthContext.Provider>
      </ApplicationContext.Provider>
    </IntlProvider>
  );
}
