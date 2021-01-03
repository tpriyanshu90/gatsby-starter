import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ color: `purple`, margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  )
}