import React, { useEffect } from 'react'
import TopBar from '../../components/Topbar/topbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from './homepage.module.css'
const Homepage = () => {
  const location = useLocation()
  const Remail = location.state;
  useEffect(() => {
    dataFetching()
  },[Remail])

  const dataFetching = async() => {
    try {
      const res = await axios.get(`https://guvi-backend-eight.vercel.app/${Remail}`)
      // console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <TopBar title={"Profile page"} />
      <div className={styles.container}>

      </div>
    </>
  )
}

export default Homepage;
