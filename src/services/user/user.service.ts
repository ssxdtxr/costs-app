import { api } from '@/config/api.ts'

export const UserService = {
  async login(body: {username: string, password: string}) {
    return await api.post('/auth/login', body)
  },
  async registration(body: {username: string, password: string}) {
    return await api.post('/auth/registration', body)
  }
}