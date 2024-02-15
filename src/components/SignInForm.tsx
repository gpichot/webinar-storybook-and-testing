import React, { useState } from 'react'
import styles from './SignInForm.module.css'

export default function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password)

  }

  const formIsValid = email && password

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="email" style={{
        color: '#fefefe'
      }}>Email</label>
      <input type="email" value={email} onChange={handleEmailChange} id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" value={password} onChange={handlePasswordChange} id="password" name="password" />
      <button type="submit" className={styles.button}
        disabled={!formIsValid}
      >Sign In</button>
    </form>
  )
}
