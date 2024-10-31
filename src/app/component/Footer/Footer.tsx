import React from 'react'
import css from "./footer.module.css"
console.log(css,"css-style")
import Link from 'next/link'

const Footer = () => {
  return (
  
    <footer className={css.footer}>
      <div className={css.footerLink}>
      
      <p>@ Saima 123</p>
  </div>
  </footer>
    
  )
}

export default Footer;