import { useNavigate } from 'react-router-dom'
import styles from './signup.module.css'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
// import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import { ErrorToast, SuccessToast } from '../../components/Customtoast/toast'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const navigate = useNavigate()
  const signUpHandler = async(e) => {
    console.log("clickded")
    e.preventDefault();
    if(password.trim() === confirmPassword.trim()) {
        setPasswordError(false)
        try {
            const res = await axios.post('https://guvi-backend-eta.vercel.app/signup',{
                name,email,password
            });
            console.log(res.data)
            if(res.data === "SUCCESS") {
                SuccessToast("successfully account created")
                navigate('/')
            } else{
                ErrorToast(`${res.data}`)   
            }
            
        } catch (error) {
            console.log(error)
        }
        
    }else{
        console.log(false)
        setPasswordError(true)
    }
  }

  return (
    <div className={styles.container}>
        <form 
         className={styles.form} 
         autoComplete="off" 
         onSubmit={(e) =>signUpHandler(e)}
        >

            <div className={styles.text}>Sign Up / Create Account</div>
            <center className={styles.email}>
                <TextField 
                 label='name' 
                 type='text' 
                 value={name}
                 onChange={(e) => setName(e.target.value)} 
                 required
                />
            </center>
            <center className={styles.email}>
                <TextField 
                 label='Email' 
                 type='email' 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)} 
                 required
                />
            </center>

            <center className={styles.password}>
                <TextField  
                 label='Password' 
                 type='password' 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)} 
                 required
                />
            </center>

            <center className={styles.password}>
                <TextField  
                 label='confirm password' 
                 type='password' 
                 value={confirmPassword}
                 onChange={(e) => setConfirmPassword(e.target.value)} 
                 required
                 helperText={passwordError ? "must equal" : ""}
                 error={passwordError}
                />
            </center>
            
            <center className={styles.btn}>
                 <Button 
                  type='submit'
                  style={{
                    color:'white',
                    backgroundColor:'green'
                  }}
                 >
                    Create Account
                 </Button>
                 <div className={styles.a_tag}>
                 Have an account already?
                 <span className={styles.span_text} onClick={() => navigate('/')}> Log in</span> 
                 </div>
            </center>
            
        </form>
    </div>
  )
}

export default SignUp