'use client'

import { useState, useRef } from "react"
import { IProfile } from '@/types/profile';

import Link   from "next/link"
import Modal  from '@/components/Ui/Modal'

type TypeForm = {
  username: string,
  password: string
}

const UserBlock = ({message, user}: {message: any, user: IProfile | undefined}) => {
  const [ open, setOpen ] = useState<boolean>(false)
  const [ form, setForm ] = useState<TypeForm>({username: '', password: ''})

  const username = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const sendForm = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    validate()
    if(form.username && form.password) {
      setForm({username: '', password: ''})
    }
  }

  const validate = () => {
    !!username.current?.value ? username.current?.classList.remove('error') : username.current?.classList.add('error')
    !!password.current?.value ? password.current?.classList.remove('error') : password.current?.classList.add('error')
  }

  const isAuth = true
  return (
    <div>
      { isAuth ? (
        <Link href={`/profile/${user?.id}`} className="profile-link">{user?.username}</Link>
      ) : (
        <button onClick={() => setOpen(true)} className="btn primary-btn">{message.sign_in}</button>
      )}
      <Modal open={open} closeModal={() => setOpen(false)}>
        <div className="auth-form">
          <span className="auth-form-title">{message.enter}</span>
          <input ref={username} value={form.username} onChange={e => setForm({...form, username: e.target.value})} className="input" type='text' placeholder={message.login}/>
          <input ref={password} value={form.password} onChange={e => setForm({...form, password: e.target.value})} className="input" type='password' placeholder={message.password}/>
          <button onClick={sendForm} className="btn primary-btn">{message.sign_in}</button>
        </div>
      </Modal>
    </div>
  )
}

export default UserBlock