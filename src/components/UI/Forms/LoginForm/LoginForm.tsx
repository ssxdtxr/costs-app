import styles from './LoginForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormInput } from '../IFormInput/IFormInput .tsx'
import { defaultValues } from '@/components/UI/Forms/contants.ts'
import { Button } from '../../Button/Button.tsx'
import { ValidationError } from '@/components/ValidationError/ValidationError.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { UserService } from '@/services/user/user.service.ts'
import Loading from '@/components/Loading/Loading.tsx'
import { IUser } from '@/types/IUser.ts'
import { useActions } from '@/hooks/useActions.ts'
import { AxiosError } from 'axios'

export const LoginForm = () => {
  const { newNotification } = useActions()
const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const { isLoading, mutateAsync } = useMutation(['user'], (body: IUser) => UserService.login(body), {
    onSuccess: () => {
      newNotification({ type: 'Success', message: 'Вы успешно вошли в аккаунт', })
      navigate('/costs')
    },
    onError: (error: AxiosError<{message: string}>) => {
      newNotification({ type: 'Error', message: error.response?.data.message, })
    }
  })


  const loginHandler: SubmitHandler<IUser> = async (data) => {
    await mutateAsync(data)
  }

  return (
    <div className={styles.login}>
      {
        isLoading &&
        <Loading text='Проверяем данные'/>
      }
      <form onSubmit={handleSubmit(loginHandler)}>
        <h1>Вход</h1>
        <FormInput
          name='username' placeholder='Введите имя' register={register} rules={{
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
          errors?.username && <ValidationError error={errors?.username?.message as string} />
        }
        <FormInput
          name='password' type='password' placeholder='Введите пароль' register={register} rules={{
          ...defaultValues,
        }} />
        {
          errors?.password && <ValidationError error={errors?.password?.message as string} />
        }
        <Button>Войти</Button>
      </form>
      <div>
        Еще нет аккаунта?
        <Link to='/registration' className={styles.registration}>Зарегестрироваться</Link>
      </div>
    </div>
  )
}

