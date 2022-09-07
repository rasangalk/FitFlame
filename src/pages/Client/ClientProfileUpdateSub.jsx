import React from 'react'
import { Box, Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

function ClientProfileUpdateSub() {
  return (
    <Box
      p={0}
      sx={{
        height: 'calc(100vh - 64px)',
        padding: 2,
        marginTop: 8,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 'calc(100vh - 6rem)',
          left: '108px',
          top: '88px',
          background: 'rgb(255, 255, 255)',
          borderRadius: '41px',
        }}
      >
        <Grid container sx={{ height: '90h' }}>
          <Grid item xs={12} sm={4} md={7}>
            <Box
              sx={{
                my: 18,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar
                src='https://source.unsplash.com/oZEkYLYxzKI'
                sx={{ width: 256, height: 256 }}
              ></Avatar>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={5}>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ mt: 2 }} component='h1' variant='h5'>
                About Me,
              </Typography>
              <Box sx={{ mt: 8 }}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <TextField fullWidth id='name' label='Name' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth id='email' label='Email' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth id='telephone' label='Telephone' />
                  </Grid>
                </Grid>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 6, mb: 2 }}
                >
                  Update
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ClientProfileUpdateSub