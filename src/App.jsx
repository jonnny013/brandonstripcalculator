
import './App.css'
import Confetti from 'react-confetti'
import Form from './Form'



function App() {
  
   console.log(
     '%cThank you for visiting my website. Made by Jon Love: %chttps://jon-love-portfolio.fly.dev',
     'font-size: 18px; color: lightblue;',
     'font-size: 18px; color: green; text-decoration: underline;'
   )

  return (
    <>
      <h1>New York Count Down</h1>
      <Form />
      <Confetti />
      <footer>
        <p>
          Thank you for visiting. See more here:{' '}
          <a href='https://jon-love-portfolio.fly.dev'>Jon Love&apos;s Portfolio</a>
        </p>
      </footer>
    </>
  )
}

export default App
