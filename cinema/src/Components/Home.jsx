import Images from './Images/Cineworld.jpg';
import MovieOne from './Images/Dragonball.jpg';
import MovieTwo from './Images/Avatar.jpg';
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
  
    return (<>
    
    <Carousel>
      <Carousel.Item>
        <img
          src={Images}
          alt="Cinema"
          width={"70%"}
        />
        <Carousel.Caption>
          <h3>QA Cinema</h3>
          <p>Welcome to QA Cinema! We bring the latest blockbusters to a screen near you.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MovieOne}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MovieTwo}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    
    
    </>)
    
    
  }