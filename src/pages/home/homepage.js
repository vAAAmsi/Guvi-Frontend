import React, { useEffect, useState } from 'react'
import TopBar from '../../components/Topbar/topbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from './homepage.module.css'
import { Box ,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  Button
} from '@mui/material';
import { DialogComponent } from '../../components/Dialog/dialogcomponet';
import { ErrorToast } from '../../components/Customtoast/toast';
const Homepage = () => {
  const location = useLocation()
  const Remail = location.state;
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false);
  const [loading,setLoading] = useState(true)
  const handleOpen = () => {
    setOpen(true);
  };
  console.log(data)
  useEffect(() => {
    dataFetching()
  },[Remail])

   const dataFetching = async() => {
    try {
      const res = await axios.get(`https://guvi-backend-eight.vercel.app/userinfo/${Remail}`)
      setData(res.data)
      setLoading(false)
    } catch (error) {
      ErrorToast(error.message)
    }
  }


  return (
    <>
      <TopBar title={"Profile page"} />
      {
        !loading ? (
          <>
            <Typography mt={[15,12]} textAlign="center" variant='h4' fontWeight={600}>
              Welcome {`${data?.name}`}
            </Typography>
            <Stack alignItems="center" mt={5} >
              <Box  borderRadius={1}  p={5} bgcolor='pink'>
                  <Typography variant='h5' textAlign="center">
                    Details
                  </Typography>
                  <Stack flexDirection="column" gap={2} mt={2}>
                    <Typography>
                      Name : <span style={{color:"white"}}>{data?.name !== undefined ? `${data?.name}` : '-'}</span>
                    </Typography>
                    <Typography>
                      Email : <span style={{color:"white"}}>{data?.email !== undefined ? `${data?.email}` : '-'}</span>
                    </Typography>
                    <Typography>
                      Age : <span style={{color:"white"}}>{data?.age !== undefined ? `${data?.age}` : '-'}</span>
                    </Typography>
                    <Typography>
                      Gender : <span style={{color:"white"}}>{data?.gender !== undefined ? `${data?.gender}` : '-'}</span>
                    </Typography>
                    <Typography>
                      Date Of Birth : <span style={{color:"white"}}>{data?.dob !== undefined ? `${data?.dob}` : '-'}</span>
                    </Typography>
                    <Typography>
                      Mobile : <span style={{color:"white"}}>{data?.phnumber !== undefined ? `${data?.phnumber}` : '-'}</span>
                    </Typography>
                  </Stack>
                  <Button style={{
                    backgroundColor:"green",
                    marginTop:"20px",
                    color:'white'
                  }} 
                  onClick={handleOpen}>
                    
                  ADD exra details</Button>
                  <DialogComponent open={open} onClose={() => setOpen(false)} id={data?._id} dataFetching= {dataFetching}/>
              </Box>
            </Stack>
          </>
        ) : (
          <Typography mt={20} textAlign="center" variant='h6'>
              Loading please wait....
          </Typography>
        )
      }
    </>
  )
}

export default Homepage;
