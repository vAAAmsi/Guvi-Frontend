import React from 'react'
import styles from './topbar.module.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SuccessToast } from '../Customtoast/toast';
export default function TopBar({title}) {
    const navigate = useNavigate();
    const logoutHandler = () => {
        SuccessToast("Logged out Successfully")
        navigate('/')
    }
  return (
    
    <div className={styles.one}>
        <div></div>
        <div className={styles.title}>
            {title}
        </div>
        <Button
         style={{
            backgroundColor:'red',
            marginRight:"20px",
            color:"white"
         }}
         onClick={() => logoutHandler() }
        >
            Logout
        </Button>
    </div>
  )
}
