import styles from './RegistrationForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormInput } from '../IFormInput/IFormInput .tsx'
import { defaultValues } from '@/components/UI/Forms/contants.ts'
import { Button } from '../../Button/Button.tsx'
import { ValidationError } from '@/components/ValidationError/ValidationError.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { UserService } from '@/services/user/user.service.ts'
import { IUser } from '@/types/IUser.ts'
import Loading from '@/components/Loading/Loading.tsx'

export const RegistrationForm = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const {mutateAsync, isLoading} = useMutation(['registration'], (body: IUser) => UserService.registration(body), {
    onSuccess: data => {
      console.log(data)
      navigate('/login')
    }
  })

  const registrationHandler: SubmitHandler<IUser> = async (data) => {
    await mutateAsync(data)
  }

  return (
    <div className={styles.registration}>
      {
        isLoading &&
        <Loading text='Регистрируем' />
      }
      <form onSubmit={handleSubmit(registrationHandler)}>
        <h1>Регистрация</h1>
        <FormInput
          name='username' placeholder='Придумайте имя пользователя' register={register} rules={{
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

