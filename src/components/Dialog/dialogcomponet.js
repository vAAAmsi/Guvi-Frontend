import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Stack, TextField } from '@mui/material';
import axios from 'axios';
import { ErrorToast, SuccessToast } from '../Customtoast/toast';

export function DialogComponent({ open, onClose,id,dataFetching }) {
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [phnumber, setPhnumber] = useState('')
    const UpdateHandler = async() => {
        try {
            await axios.put(`https://guvi-backend-eight.vercel.app/update/${id}`,{
                age,gender,dob,phnumber
            })
            SuccessToast("successfully Updated")
            dataFetching()
            onClose()
        } catch (error) {
            ErrorToast(error.message)
        }
    }
    
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Details</DialogTitle>
      <DialogContent>
        <Stack flexDirection='column' gap={2} mt={2}>
            <TextField label='enter age' value={age} onChange={(e) => setAge(e.target.value)}/>
            <TextField label='gender' value={gender} onChange={(e) => setGender(e.target.value)}/>
            <TextField label='DOB ' value={dob} onChange={(e) => setDob(e.target.value)}/>
            <TextField label='Mobile Number' value={phnumber} onChange={(e) => setPhnumber(e.target.value)}/>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button style={{
            backgroundColor:'green',
            color:"white"
        }} onClick={() => UpdateHandler()}>
          ADD
        </Button>
      </DialogActions>
    </Dialog>
  );
}
