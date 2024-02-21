import './App.css'
import Confetti from 'react-confetti'
import Form from './Form'
import Footer from './Footer'



function App() {
  
   console.log(
     '%cThank you for visiting my website. Made by Jon Love: %chttps://jon-love-portfolio.fly.dev',
     'font-size: 18px; color: lightblue;',
     'font-size: 18px; color: green; text-decoration: underline;'
   )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        <h1>New York Count Down</h1>
        <Form />
        <Confetti />
      </div>
      <Footer />
    </div>
  )
}

export default App
