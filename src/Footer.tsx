import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import React from 'react'

const Footer = () => {

  return (
    <Box>
      <BottomNavigation showLabels style={{ backgroundColor: '#8FA7BB', margin: 0 }}>
        <BottomNavigationAction
          href='https://jon-love-portfolio.fly.dev'
          label='My Portfolio'
          icon={
            <img
              alt='logo'
              src='/mainLogo.png'
              width='50'
              height='40'
              className='d-inline-block align-top'
            />
          }
        />

        <BottomNavigationAction
          href='https://github.com/jonnny013/brandonstripcalculator'
          label='Source Code'
          icon={
            <img
              alt='logo'
              src='/GitHub-logo.png'
              width='50'
              height='40'
              className='d-inline-block align-top'
            />
          }
        />
      </BottomNavigation>
    </Box>
  )
}

export default Footer
