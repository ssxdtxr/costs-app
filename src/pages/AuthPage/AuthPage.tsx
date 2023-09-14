import { FC, useEffect, useState } from 'react'
import { LoginForm } from '@/components/UI/Forms/LoginForm/LoginForm.tsx'
import { RegistrationForm } from '@/components/UI/Forms/RegistrationForm/RegistrationForm.tsx'
import { Background } from '@/components/UI/Background/Background.tsx'

interface IAuthPage {
  type: 'login' | 'registration'
}

export const AuthPage: FC<IAuthPage> = ({ type }) => {
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
    <>
      {
        windowSize.innerWidth < 400 ?
          <Background />
          :
          ''
      }

      {
        type === 'login' ?
          <LoginForm />
          :
          <RegistrationForm />
      }
    </>
  )
}

