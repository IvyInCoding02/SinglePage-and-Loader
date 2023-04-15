import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './registerpage.module.css';

function RegisterPage() {
  return (
    <section className={styles.wrapper}> 
        <h1 className={styles.title}>Registration</h1>
        <form className={styles.form}>
            <TextField  label="Enter your email" 
            variant="filled" 
            type="email"
            fullWidth
            required
            style={{marginBottom:"20px"}}/>

            <TextField  label="Enter your name" 
            variant="filled" 
            type="text"
            fullWidth
            required
            style={{marginBottom:"20px"}}/>

            <TextField  label="Enter your password" 
            variant="filled" 
            type="password"
            fullWidth
            required
            style={{marginBottom:"40px"}}
            />
            <Button type="submit" 
            fullWidth 
            ariant="contained"
            style={{background:"#BF94E8", fontSize:"24px"}}
            >
            Register
            </Button>
        </form>
    </section>
  )
}

export default RegisterPage;