import React from 'react'
import { toast } from 'react-toastify';
export const SuccessToast = (title) => {
  return (
    toast.success(title, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, 
        onClose: () => {
          console.log('Toast closed');
        },
      })
  )
}

export const ErrorToast = (title) => {
  return (
    toast.error(title, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, 
        onClose: () => {
          console.log('Toast closed');
        },
      })
  )
}


