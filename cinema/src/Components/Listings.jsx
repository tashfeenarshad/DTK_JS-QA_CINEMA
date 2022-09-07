import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Outlet } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';

const Listings = () => {

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
    axios.get("http://localhost:5015/movie/getAll")
      .then((res) => {
        setItems(res.data);
        setIsLoaded(true);
        console.log(res.data);
      }).catch((err) => {
        console.log(err.message);

      })
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (

      <div id="film-container" style={{ display: "flex" }}>
        {items.map((item) =>
          <Card style={{ width: '18rem', margin: "10px" }} key={item._id} text={"white"} bg={"dark"}>
            <Card.Img variant="top" src={item.poster} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.plot}
              </Card.Text>
            </Card.Body>
            <ListGroup class="list-group list-group-flush">
              <ListGroup.Item style = {{background : "#212529", color : "#fff"}}><b>Genre: </b> {item.genre}</ListGroup.Item>
              <ListGroup.Item style = {{background : "#212529", color : "#fff"}}><b>Runtime: </b>{item.runtime}</ListGroup.Item>
              <ListGroup.Item style = {{background : "#212529", color : "#fff"}}><b>Rated: </b>{item.rated}</ListGroup.Item>
              <ListGroup.Item style = {{background : "#212529", color : "#fff"}}><b>Director: </b>{item.director}</ListGroup.Item>
              <ListGroup.Item style = {{background : "#212529", color : "#fff"}}><b>Actors: </b>{item.actors}</ListGroup.Item>
              {item.showtime.map((showtimes) =>
                <ListGroup.Item style = {{background : "#212529", color : "#fff"}}>
                <b>Showing on:</b> {showtimes.days.join(" ")} 
                <br></br>
                <b>At:</b> {showtimes.times.join(" ")}
                </ListGroup.Item>
              )}
            </ListGroup>
            <Button variant="success" href="/bookings">Book a ticket</Button>{' '}
          </Card>)}
      </div>
    )
  }
}

export default Listings;