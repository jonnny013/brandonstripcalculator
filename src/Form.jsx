import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'

const Form = () => {
  const [date, setDate] = useState(new Date('2024-07-01'))
  const [daysLeft, setDaysLeft] = useState(null)
    const [showNotification, setShowNotification] = useState(null)

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowNotification(null)
      }, 5000)

      return () => clearTimeout(timeout)
    }, [showNotification, setShowNotification])

  useEffect(() => {
    const savedDate = window.localStorage.getItem('tripDate')
    if (savedDate) {
      setDate(new Date(savedDate))
    } else {
      setDate(new Date('2024-07-01'))
    }
  }, [])

  useEffect(() => {
    const timeLeft = date - Date.now()
    const totalDays = Math.ceil(timeLeft / (1000 * 60 * 60 * 24))
    const months = (totalDays / 30).toFixed(1)
    const remainingDays = totalDays % 30
    setDaysLeft({ totalDays, months, remainingDays })
  }, [date, setDate])

  const handleSubmit = event => {
    event.preventDefault()
    const formattedDate = date.toISOString().split('T')[0] 
    window.localStorage.setItem('tripDate', formattedDate)
    setShowNotification('Saved to your device')
  }

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 345,
        margin: 'auto',
        marginBottom: 20,
        borderRadius: 6,
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
          value={date.toISOString().split('T')[0]}
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'black' }}
          onChange={e => setDate(new Date(e.target.value))}
        />
        <Button type='submit' variant='contained'>
          Submit to save your date for next time!
        </Button>
        {showNotification && <Alert severity='success'>{showNotification}</Alert>}
      </form>
      <h3>Time till your trip</h3>
      {daysLeft && (
        <>
          <h4>Total Days: {daysLeft.totalDays}</h4>
          <h4>Total Months: {daysLeft.months}</h4>
          <h4>
            {Math.floor(daysLeft.totalDays / 30)} months and {daysLeft.remainingDays} days
          </h4>
        </>
      )}
    </div>
  )
}

export default Form
