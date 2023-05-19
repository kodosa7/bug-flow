import { useState } from 'react'
import './output.css'
import "./styles.css"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-emerald-200">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
