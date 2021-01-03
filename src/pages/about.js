import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <Header headerText="About Priyanshu" />
      <Header headerText="Welcome!" />
      <p>This is a gatsby starter project by Priyanshu Tiwari</p>
    </Layout>
  )
}