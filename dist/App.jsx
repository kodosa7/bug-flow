import { useState } from 'react'
import './output.css'
import "./styles.css"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-gray-900 p-10 font-raleway">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}