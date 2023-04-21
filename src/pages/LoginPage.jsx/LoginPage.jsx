import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../RegisterPage/registerpage.module.css'; 
import { authService } from '../services/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup'; 

const validationSchema = yup.object().shape({
  email: yup.string().required('This field is required').email('Enter valid email address'),
  password: yup.string().required('This field is required')
})

function LoginPage() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const formik = useFormik({
      initialValues : {
        email: '',
        password: ''
      },
      validationSchema,
      onSubmit: async(values) => {
        try {
          const res = await authService().login(values)
          console.log(res.data)
          toast('Logged in Successfully!')
        // }catch(err) {
        //   toast(err.response.data)
        }catch{
          toast('Your email address and password do not match.Try again!')
        }
      }
    })

  //   const handleSubmit = async (e) => {
  //       e.preventDefault()
  //       const userObj = {
  //           email,
  //           password
  //       }
  //       try {
  //           const res = await authService().login(userObj)
  //           console.log(res.data._doc)
  //           toast('You successfully logged in!!!')
  //       } catch (error){
  //           toast(error.response.data)
  //       }
  // } 
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextField
          label="Your email"
          error={Boolean(formik.errors.email)}
          helperText={formik.errors.email && formik.errors.email}
          onBlur={formik.handleBlur}
          variant="filled"
          type="email"
          name="email"
          fullWidth
          style={{ marginBottom: "20px" }}
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <TextField
          label="Your password"
          error={Boolean(formik.errors.password)}
          helperText={formik.errors.password && formik.errors.password} 
          onBlur={formik.handleBlur}
          variant="filled"
          type="password"
          name="password"
          fullWidth
          required
          style={{ marginBottom: "40px" }}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button
          type="submit"
          fullWidth
          ariant="contained"
          style={{ background: "#BF94E8", fontSize: "24px" }}
        >Login
        </Button>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}

export default LoginPage;