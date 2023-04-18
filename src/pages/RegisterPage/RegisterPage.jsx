import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './registerpage.module.css';
import { useState } from 'react';
import { rootApi } from '../../api';
import { authService } from '../services/auth';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const {registration} = authService();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newUser = {
      "username": name,
      email,
      password
    }
    const { data } = await registration(newUser);
    console.log(data._doc)
  }
  


  return (
    <section className={styles.wrapper}> 
        <h1 className={styles.title}>Registration</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
            <TextField  label="Enter your email" 
            variant="filled" 
            type="email"
            fullWidth
            required
            style={{marginBottom:"20px"}}
            value={email}
            onChange={e => setEmail(e.target.value)}/>

            <TextField  label="Enter your name" 
            variant="filled" 
            type="text"
            fullWidth
            required
            style={{marginBottom:"20px"}}
            value={name}
            onChange={e => setName(e.target.value)}/>

            <TextField  label="Enter your password" 
            variant="filled" 
            type="password"
            fullWidth
            required
            style={{marginBottom:"40px"}}
            value={password}
            onChange={e => setPassword(e.target.value)}
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