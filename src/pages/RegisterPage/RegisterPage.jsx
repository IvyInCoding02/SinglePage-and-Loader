import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './registerpage.module.css';
import { authService } from '../services/auth';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup'; 
  
const validationSchema = yup.object().shape({
  email: yup.string().required('This field is required').email('Enter valid email address'),
  username: yup.string().required('This field is required'),
  password: yup.string().required('This field is required')
})

function RegisterPage() {
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');

  // This code provides all the code written above 
  const formik  = useFormik({
    initialValues: {
      email : '',
      password: '',
      username: ''
    },
    validationSchema, 
    onSubmit: async(values) => {
      try{
        const data = await authService().registration(values)
        console.log(data.data._doc);
        toast("The user is registered")
      } catch(err){
        toast("This user already exists. Log in!")
      }
    }
  }); 

  // The onSubmit code above is used instead of the code below to process the function  
  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   const newUser = {
  //     "username": name,
  //     email,
  //     password
  //   }
  //   const { data } = await registration(newUser);
  //   console.log(data._doc)
  // }

  return (
    <section className={styles.wrapper}> 
        <h1 className={styles.title}>Registration</h1>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <TextField  label="Your email" 
            error={Boolean(formik.errors.email)}
            helperText={formik.errors.email && formik.errors.email}
            onBlur={formik.handleBlur}
            variant="filled" 
            type="email"
            name="email"
            fullWidth
            style={{marginBottom:"20px"}}
            value={formik.values.email}
            onChange={formik.handleChange}/>

            <TextField  label="Your name" 
            error={Boolean(formik.errors.username)}
            helperText={formik.errors.username && formik.errors.username}
            onBlur={formik.handleBlur}
            variant="filled" 
            type="text"
            name="username"
            fullWidth
            required
            style={{marginBottom:"20px"}}
            value={formik.values.username}
            onChange={formik.handleChange}/>

            <TextField  label="Your password"
            error={Boolean(formik.errors.password)}
            helperText={formik.errors.password && formik.errors.password}
            onBlur={formik.handleBlur}
            variant="filled" 
            type="password"
            name="password"
            fullWidth
            required
            style={{marginBottom:"40px"}}
            value={formik.values.password}
            onChange={formik.handleChange}
            />
            <Button type="submit" 
            fullWidth 
            ariant="contained"
            style={{background:"#BF94E8", fontSize:"24px"}}
            >
            Register
            </Button>
        </form>
        <ToastContainer />
    </section>
  )
}

export default RegisterPage;