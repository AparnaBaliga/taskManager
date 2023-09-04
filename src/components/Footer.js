import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h3>About Us</h3>
            <p>
              We are a team of passionate individuals committed to making the world a better place through innovative solutions.
            </p>
          </Col>
          <Col md={6}>
            <h3>Get in Touch</h3>
            <p>If you have an idea or a project you'd like to discuss, let's connect!</p>
            <Button variant="outline-light" href="/contact">Contact Us</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="text-center">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
