import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
export default function Login(props) {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [login, setLogin] = useState(false)

  const createUser = async ()=>{
    const { error} = await props.supabase.from('user').insert({
      email:email,
      password:pass
    })

    if (!error){
      window.location = "/"
    }
    
  }

  return (
      <form>
        <h3>Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email"/>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input onChange={(e)=>setPass(e.target.value)} type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>
        <div className="d-grid">
          <button onClick={createUser} type="button" className="button3">Submit</button>
        </div>
        <p className="forgot-password text-right">
         Don't have an account? <Link to="/signin">Sign up</Link>
            </p>
      </form>
  )
}