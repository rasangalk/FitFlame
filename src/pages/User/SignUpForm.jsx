import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Avatar from '@mui/material/Avatar'
import { db } from '../../firebase-config'
import { collection, addDoc } from 'firebase/firestore'
import { getAuth } from '@firebase/auth'
import { useUserAuth } from '../../Context/UserAuthContext'

function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newName, setNewName] = useState('')
  const [newMobile, setNewMobile] = useState('')
  const [NewRole, setNewRole] = useState('')
  const [newGender, setNewGender] = useState('')
  const [newAge, setNewAge] = useState('')
  const [error, setError] = useState('')
  const { signUp } = useUserAuth()
  const navigate = useNavigate()

  const auth = getAuth()
  const usersCollectionRef = collection(db, 'users')

  const createUser = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signUp(email, password).then(() => {
        const user = auth.currentUser
        addDoc(usersCollectionRef, {
          name: newName,
          mobile: Number(newMobile),
          role: NewRole,
          gender: newGender,
          email: user.email,
          age: Number(newAge),
          user: user.uid,
        })
        console.log(
          newName,
          newMobile,
          NewRole,
          newGender,
          user.email,
          newAge,
          user.uid
        )
      })
      navigate('/signIn')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign Up
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='name'
                  label='Name'
                  name='name'
                  autoComplete='name'
                  autoFocus
                  onChange={(event) => {
                    setNewName(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='email'
                  fullWidth
                  id='email'
                  label='Email'
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='age'
                  fullWidth
                  id='age'
                  label='Age'
                  onChange={(event) => {
                    setNewAge(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='mobile'
                  label='Mobile'
                  name='mobile'
                  autoComplete='mobile'
                  onChange={(event) => {
                    setNewMobile(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} fullWidth>
                <FormControl fullWidth>
                  <InputLabel id='role'>Role</InputLabel>
                  <Select
                    labelId='role'
                    id='role'
                    value={NewRole}
                    label='Role'
                    onChange={(event) => {
                      setNewRole(event.target.value)
                    }}
                  >
                    <MenuItem value={'Client'}>Client</MenuItem>
                    <MenuItem value={'Trainter'}>Trainer</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} fullWidth>
                <FormControl fullWidth>
                  <InputLabel id='gender'>Gender</InputLabel>
                  <Select
                    labelId='gender'
                    id='gender'
                    value={newGender}
                    label='Gender'
                    onChange={(event) => {
                      setNewGender(event.target.value)
                    }}
                  >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  onChange={(event) => {
                    setPassword(event.target.value)
                  }}
                />
              </Grid>
            </Grid>
            <Button
              onClick={createUser}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/signIn' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/oZEkYLYxzKI)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  )
}

export default SignUpForm
