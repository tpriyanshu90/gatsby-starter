import React from "react"
import Header from "../components/header"
import {Link} from 'gatsby';

export default function PageNotFound() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="Oops :( this page does not exists" />
      <Link to="/">Go Home</Link>
    </div>
  )
}