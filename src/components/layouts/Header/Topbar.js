import React, { useEffect, useState } from 'react'
import './header.css'
import { Container } from '@mui/system'
import { mailIcon, phoneIcon } from '../../../constant'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, } from 'react-icons/fa'

export const Topbar = () => {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`${scrolled ? 'bgScrolled' : 'bgTransparent'} topbar`} >
      <Container>
        <div className='spaceBetween' style={{ float: 'right' }}>
          <div className={`${scrolled && 'scrolledColor'} socialIcon`}>
            <i><FaFacebookF /></i>
            <i><FaInstagram /></i>
            <i><FaLinkedinIn /></i>
            <i><FaYoutube /></i>
          </div>
        </div>
      </Container>
    </div >
  )
}