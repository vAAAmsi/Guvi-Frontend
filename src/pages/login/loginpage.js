import { useNavigate } from 'react-router-dom'
import styles from './loginpage.module.css'
import { useState } from 'react'
import { TextField,Button } from '@mui/material'
import axios from 'axios'
import { ErrorToast, SuccessToast } from '../../components/Customtoast/toast'
// import Swal from 'sweetalert2'

const LoginPage = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const navigate = useNavigate()

  const loginHandler = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://guvi-backend-eta.vercel.app",{
      email,
      password
      })

    if(response.data === "SUCCESS"){
      SuccessToast("Successfully logged in")
      navigate('/homepage',{
        state : email
      })

    } else if(response.data === "password incorrect"){
      ErrorToast(`${response.data}`);
    } else {
      ErrorToast(`${response.data}`);
    }

    } catch (error) {
      ErrorToast(error.message)
    }
    
  }

  return (
    <div className={styles.container}>
        <form className={styles.form} autoComplete="off"
          onSubmit={(e) => loginHandler(e)}
        >

            <div className={styles.text}>Login To The Account</div>
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

            
            <center className={styles.btn}>
            <Button 
                  type='submit'
                  style={{
                    color:'white',
                    backgroundColor:'green'
                  }}
                 >
                    Login
                 </Button>               
                 <div className={styles.a_tag}>
                    Don't have an account? 
                 <span className={styles.span_text} onClick={() => navigate('/signup')}> SignUp</span> 
                 </div>
            </center>
            
        </form>
    </div>
  )
}

export default LoginPage
