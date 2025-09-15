import React from 'react'
import Nav from '../pages/Nav'
import ThemeToggle from "./ThemeToggle";
import '../theme.css'

const Home = () => {
  return (
    <div style={{ padding: "50px" }}>
      <ThemeToggle />
      <h1 style={{ color: "var(--primary-color)" }}>Hello World</h1>
      <p style={{ color: "var(--secondary-color)" }}>This is a themed paragraph</p>
      <button style={{ backgroundColor: "var(--accent-color)" }}>Click Me</button>
    </div>
  )
}

export default Home