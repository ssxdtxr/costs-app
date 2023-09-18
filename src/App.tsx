import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage/AuthPage.tsx'
import { Container } from '@/components/Container/Container.tsx'
import "@/assets/styles/global.scss"
import { Header } from '@/components/Header/Header.tsx'
import { useEffect, useState } from 'react'
import { Background } from '@/components/UI/Background/Background.tsx'
const App = () => {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
  }
  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  return (
    <BrowserRouter>
      <Header />
      {
        windowSize.innerWidth < 400 &&
          <Background />
      }
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
