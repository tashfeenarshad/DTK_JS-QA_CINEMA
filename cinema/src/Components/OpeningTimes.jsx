import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';

function OpeningTimes() {
  return (
    <>
      <h1>Opening Times</h1>
      <br />
      <Row>
        <Card style={{ width: '15rem' }} >

          <Card.Body>
            <Card.Title>Monday</Card.Title>
            <Card.Text>
              15:00 - 23:00
            </Card.Text>
            <Button variant="primary">Booking</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem' }}>

          <Card.Body>
            <Card.Title>Tuesday</Card.Title>
            <Card.Text>
              15:00 - 23:00
            </Card.Text>
            <Button variant="primary">Booking</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem' }}>

          <Card.Body>
            <Card.Title>Wednesday</Card.Title>
            <Card.Text>
              15:00 - 23:00
            </Card.Text>
            <Button variant="primary">Booking</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem' }}>

          <Card.Body>
            <Card.Title>Thursday</Card.Title>
            <Card.Text>
              15:00 - 23:00
            </Card.Text>
            <Button variant="primary">Booking</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem' }}>

          <Card.Body>
            <Card.Title>Friday</Card.Title>
            <Card.Text>
              15:00 - 00:00
            </Card.Text>
            <Button variant="primary">Booking</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem' }}>

          <Card.Body>
            <Card.Title>Saturday</Card.Title>
            <Card.Text>
              15:00 - 00:00
            </Card.Text>
            <Button variant="primary">Booking</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem' }}>

          <Card.Body>
            <Card.Title>Sunday</Card.Title>
            <Card.Text>
              15:00 - 23:00
            </Card.Text>
            <Button variant="primary">Booking</Button>
          </Card.Body>
        </Card>
      </Row>
    </>);
}
export default OpeningTimes;