import { create } from 'zustand'
// import { cookies } from 'next/headers'


type State = {
  tokens: {access: string, refresh: string}
}

type Actions = {
  setToken: (tokens: {access: string, refresh: string}) => void
}

export const useAuthStore = create<State & Actions>((set) => ({
  tokens: {
    access: '',
    refresh: ''
  },
  setToken: (tokens) => {
    // cookies().set('access', tokens.access)
    // cookies().set('refresh', tokens.refresh)
    set(() => ({ tokens: tokens }) )
  }
}))