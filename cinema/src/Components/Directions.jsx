import Parking from './Images/Parking.jpg';
import GoogleMap from './GoogleMap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Directions() {
    return (
    <>
    <h1>Directions</h1>
    
    <div>
        <Row>
            <Col lg="5">
                <br/>
                <div>
                    <h3>Public Transport</h3>
                    <p>We are within walking distance of Tower Hill Underground, London Bridge Underground and Tower Gateway DLR station.
                      Use our interactive map to search for directions as necessary.
                    </p>
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
            <Col lg="1"></Col>
            <Col className="map-info" lg="6">
                <GoogleMap />
            </Col>
        </Row> <br/>     
    <Row>
    <h3>Parking Availability</h3>
    <br/>
    <img
          className="d-block w-100"
          src={Parking}
          alt="Parking"/>
    </Row>

  </div>
  </>);}
  export default Directions;