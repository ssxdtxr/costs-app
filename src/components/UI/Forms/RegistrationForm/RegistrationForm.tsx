import styles from './RegistrationForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormInput } from '../IFormInput/IFormInput .tsx'
import { defaultValues } from '@/components/UI/Forms/contants.ts'
import { Button } from '../../Button/Button.tsx'
import { ValidationError } from '@/components/ValidationError/ValidationError.tsx'
import { Link } from 'react-router-dom'

interface ILogin {
  name: string
  password: string
}

export const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      password: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const loginHandler: SubmitHandler<ILogin> = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <div className={styles.registration}>
      <form onSubmit={handleSubmit(loginHandler)}>
        <h1>Регистрация</h1>
        <FormInput
          name='name' placeholder='Придумайте имя пользователя' register={register} rules={{
          ...defaultValues,
          minLength: {
            value: 4,
            message: 'Слишком короткое имя',
          },
          maxLength: {
            value: 10,
            message: 'Слишком длинное имя',
          },
        }} />
        {
          errors?.name && <ValidationError error={errors?.name?.message as string} />
        }
        <FormInput
          name='password' type='password' placeholder='Придумайте пароль' register={register} rules={{
          ...defaultValues,
        }} />
        {
          errors?.password && <ValidationError error={errors?.password?.message as string} />
        }
        <Button>Зарегестрироваться</Button>

      </form>
      <div>
        Уже есть аккаунт?
        <Link to='/login' className={styles.login}>Войти</Link>
      </div>
    </div>
  )
}

