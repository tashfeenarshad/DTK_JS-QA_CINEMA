import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
  

export default function Bookings() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [days, setDays] = useState([]);
  const [date, setDate] = useState(new Date());
  const [times, setTimes] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("Movies");
  const [openModal, setOpenModal] = useState(false)

  const changeDate = (date) => {
    setDate(date);
};


  
    return (
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Film</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Time</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
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
  
        <div>
                    <h5 style={{ fontWeight: 'bold' }}>Select a Date</h5>
                    <Calendar
                        minDate={new Date()}
                        onChange={changeDate}
                        value={date}
                        tileDisabled={({ date }) => !days.includes(date.getDay())}
                    />
                </div>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  
 
  