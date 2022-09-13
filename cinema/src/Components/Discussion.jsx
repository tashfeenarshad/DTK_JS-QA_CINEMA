import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';





function DiscussionBoard() {
    const [items, setItems] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:5017/discussion/getAll")
            .then((res) => {
                setItems(res.data);
                console.log(res.data);
            }).catch((err) => {
                console.log(err.message);

            })
    }, [])


    return (
        <>



            <Form>
                <h3>Discussion Board</h3>
                <br />
                <Row>
                    <Col>
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Tash" required />
                    </Col>


                </Row>
                <br />


                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" as="textarea" placeholder="Enter your Rating" required />
                </Form.Group>



                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Movie</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter the name of your Movie" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>

            {items.map((item) => (<ListGroup key={item._id} >
                
                <br></br>
                <ListGroup.Item >  This is the username : {item.name}</ListGroup.Item>
                <ListGroup.Item>This is the comments :{item.comment}</ListGroup.Item>
                <ListGroup.Item>This is the Movie: {item.movie}</ListGroup.Item>
                <ListGroup.Item> This is the Rating: {item.rating} </ListGroup.Item></ListGroup>))}


        </>



    );
}

export default DiscussionBoard;

  




