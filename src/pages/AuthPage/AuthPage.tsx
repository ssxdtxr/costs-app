import { FC } from 'react'
import { LoginForm } from '@/components/UI/Forms/LoginForm/LoginForm.tsx'
import { RegistrationForm } from '@/components/UI/Forms/RegistrationForm/RegistrationForm.tsx'

interface IAuthPage {
  type: 'login' | 'registration'
}

export const AuthPage: FC<IAuthPage> = ({ type }) => {
  return (
    <>
      {
        type === 'login' ?
          <LoginForm />
          :
          <RegistrationForm />
      }
    </>
  )
}

