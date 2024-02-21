import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import './App.css'
import { Button } from '@mui/material'


function App() {
  const [date, setDate] = useState(new Date('2024-07-01'))
  const [daysLeft, setDaysLeft] = useState(null)
  
  useEffect(() => {
    const savedDate = window.localStorage.getItem('tripDate')
    if (savedDate) {
      setDate(new Date(savedDate))
    }
  }, [])

  useEffect(() => {
    const timeLeft = date - Date.now()
    const totalDays = Math.ceil(timeLeft / (1000 * 60 * 60 * 24))
    const months = (totalDays / 30).toFixed(1) 
    const remainingDays = totalDays % 30
    setDaysLeft({ totalDays, months, remainingDays })
  }, [date, setDate])

  const handleSubmit = (event) => {
    event.preventDefault()
    window.localStorage.setItem('tripDate', date.toISOString())
  }
    
  return (
    <>
      <h1>New York Count Down</h1>
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
        >
          <TextField
            id='date'
            label='Trip Date'
            type='date'
            defaultValue='2024-07-01'
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
            onChange={e => setDate(new Date(e.target.value))}
          />
          <Button type='submit' variant='contained'>
            Submit to save your date for next time!
          </Button>
        </form>
        <h3>Time till your trip</h3>
        {daysLeft && (
          <>
            <h4>Total Days: {daysLeft.totalDays}</h4>
            <h4>Total Months: {daysLeft.months}</h4>
            <h4>
              {Math.floor(daysLeft.totalDays / 30)} months and {daysLeft.remainingDays}{' '}
              days
            </h4>
          </>
        )}
      </div>
    </>
  )
}

export default App
