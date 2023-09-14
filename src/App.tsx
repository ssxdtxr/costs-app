import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage/AuthPage.tsx'
import { Container } from '@/components/Container/Container.tsx'
import "@/assets/styles/global.scss"
import { Header } from '@/components/Header/Header.tsx'
const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<AuthPage type='login' />} />
          <Route path='/login' element={<AuthPage type='login' />} />
          <Route path='/registration' element={<AuthPage type='registration' />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
