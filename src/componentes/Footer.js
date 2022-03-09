import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
        <footer>
          <Container as='div' className=''>
            <Row>
              <Col className='foo' as='span'>Copyright &copy; GifApp</Col>
              <Col className='foo' as='span'>Developed by Francisco Delzón</Col>
            </Row>
          </Container>
        </footer>
    </>
  )
}

export default Footer