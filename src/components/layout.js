import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ color: `purple`, margin: `3rem auto`, maxWidth: 850, padding: `0 1rem` }}>
      <h1>MyGatsyStarterSite</h1>
      {children}
    </div>
  )
}