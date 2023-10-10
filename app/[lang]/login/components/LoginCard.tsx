'use client'

import React, { useState, MouseEvent  } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import Image from 'next/image';

type PropsType = {
  lang: string,
  message: any
}

type Inputs = {
  email: string,
  password: string,
};

const LoginCard = ({ lang, message }: PropsType) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const [type, setType] = useState<string>('password')

  const showPass = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
    setType(type === 'password' ? 'text' : 'password')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='login-card flex flex-center flex-column'>
      <div className="login-card-header flex flex-center">
        <span>UNWEB</span>
        <Image
            alt='eye'
            width="40"
            height="40"
            src='/logo.svg'
          />
      </div>
      <p>{message.welcome}</p>
      <div className='input-block'>
        <label>{ message.email }</label>
        <input
          type="text"
          className='input'
          autoComplete="username"
          placeholder={message.enter_email}
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div className='input-block'>
        <label>{message.password}</label>
        <input
          type={type}
          className='input'
          placeholder={message.enter_password}
          autoComplete="current-password"
          {...register("password", { required: true })}
        />
        <div onClick={showPass} className='showPass'>
          <Image
            alt='eye'
            width="24"
            height="24"
            src={`/eye/${type == 'text' ? 'closed' : 'open'}.svg`}
          />
        </div>
        {errors.password && <span>{message.required}</span>}
      </div>
      <input className='button button--black full-width submit' type="submit" value={message.submit}/>

    </form>
  )
}

export default LoginCard