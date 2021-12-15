import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useEffect, useState } from 'react'

function Header() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className="header-container" id="top">
      <Navbar expand="lg" variant="dark" fixed="top" bg="dark">
        <Container>
          <Navbar.Brand className="display-full" href="/">
            Asteriski <span className="purple">50v</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav navbarScroll>
              <Nav.Link href="#top">Alkuun</Nav.Link>
              <Nav.Link href="#ohjelma">Ohjelma</Nav.Link>
              <Nav.Link href="#etiketti">Etiketti</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#sillis">Sillis</Nav.Link>
              <Nav.Link href="#ilmo">Ilmoittautuminen</Nav.Link>
              <Nav.Link href="#sponsorit">Sponsorit</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/en">In English</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
