import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
import { Link } from "gatsby"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <User
        username="Bob Smith"
        avatar="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Jane Doe"
        avatar="https://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  )
}