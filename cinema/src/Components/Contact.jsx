import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact() {
  return (
    <>

      <div>
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center' }} >
                        <h1 style={{ fontWeight: 'bold' }} >Contact Us</h1>
                    </Col>
                </Row>
                <br />

                <Row>
                    <Col lg="3">
                        <div id="address-info-div">
                            <h3>Address</h3>
                            <p>3rd Floor
                            <br />
                            International House
                            <br />
                            1 St Katherine's Way
                            <br />
                            London
                            <br />
                            E1W 1UN</p>
                        </div>
                    </Col>

                    <Col lg="3">
                        <div id="contact-info-div">
                            <h3>Contacts</h3>
                            <p>Tel: 
                            <br />
                            Email
                            <br />
                            Website: 
                            <br />
                            Twitter: 
                            <br />
                            Instagram:</p>
                        </div>
                    </Col>
                </Row>
                <br />
            </div>


    <Form>
    <h3>Email Us</h3>
    <br />
    <Row>
        <Col>
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="John" required/>
        </Col>
        <Col>
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Smith" required/>
        </Col>
    </Row>
    <br/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Subject</Form.Label>
        <Form.Control as="textarea" placeholder="Enter the subject of your email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter your message" required/>
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Contact;