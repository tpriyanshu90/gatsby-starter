import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="About Priyanshu" />
      <Header headerText="Welcome!" />
      <p>This is a gatsby starter project by Priyanshu Tiwari</p>
    </div>
  )
}