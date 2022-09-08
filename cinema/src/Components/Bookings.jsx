import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import DatePicker from 'react-date-picker';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import VueMonthlyPicker from 'vue-monthly-picker'



export default function Bookings() {
  
  
  const [value, onChange] = useState(new Date());
 

  

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>   
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>Name on card</Form.Label>
            <Form.Control type="text" placeholder="Cardholder Name" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="Number" placeholder="Card Number" />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="formGridDate">
          <Form.Label>Expiry</Form.Label>
          <Form.Control type ="expiry" placeholder="MM/YY" />
        </Form.Group>

        
        
  
        <Form.Group className="mb-3" controlId="formGridNumber">
          <Form.Label>CVV</Form.Label>
          <Form.Control type="number" placeholder="CVV" />
        </Form.Group>
  
        
  
        
  
        <Button variant="primary" type="submit" onClick={handleShow}>
          Submit
        </Button>
      </Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
  
    
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="formGridState">
          <Form.Label>Film</Form.Label>
          <Form.Control placeholder="Film" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formGridTime">
          <Form.Label>Time</Form.Label>
          <Form.Control placeholder="Time" />
        </Form.Group>
  
        <Row className="mb-3">
          
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Adult</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Child</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Concession</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Select>
          </Form.Group>
  
          
        </Row>
        <Form.Group className="mb-3" controlId="formGridState">
        <DatePicker id="datePicker" onChange={onChange} value={value} format='dd-MM-y'/>
        </Form.Group>
        

                
        
  
        <Button variant="primary" type="submit" onMouseDown={handleShow}>
          Submit
        </Button>
      </Form></>

    );
  }
  
 
  