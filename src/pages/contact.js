import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <h1>I'd love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </Layout>
  )
}