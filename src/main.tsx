import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NotificationsProvider } from '@/provider/NotificationsProvider/NotificationsProvider.tsx'
import { Provider } from 'react-redux'
import { store } from '@/store/store.ts'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <NotificationsProvider>
        <App />
      </NotificationsProvider>
    </QueryClientProvider>
  </Provider>,
)
