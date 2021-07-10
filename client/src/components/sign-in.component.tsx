import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { createUser } from "../actions/authentication.action"
import "./sign-in.component.scss"

export const SignIn = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const updateEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)

  const updateName = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)

  const updatePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!email || !password || !name) {
      alert("All fields are mandatory")
      return
    }
    dispatch(createUser({ user: { email, password, name } }))
  }

  return (
    <div className="sing-in">
      <form onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <input className="field" type="text" placeholder="Name" value={name} onChange={updateName}></input>
        <input className="field" type="text" placeholder="E-mail" value={email} onChange={updateEmail}></input>
        <input
          className="field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        ></input>
        <button type="submit" className="button blue sign-in">
          Sign in
        </button>
      </form>
    </div>
  )
}
