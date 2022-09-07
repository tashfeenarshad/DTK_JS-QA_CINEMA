import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function About() {
    return (
  <>
    <h1>About</h1>
    

  <CardGroup>
      <Card style={{ width: '20rem' }} >
        <Card.Img variant="top" src="holder.js/100px180" alt=""/>
        <Card.Body>
          <Card.Title>Damian Poclitar</Card.Title>
          <Card.Text>
            <h6>Contact Details</h6>
              <a><Button variant="primary">Email</Button></a> 
          </Card.Text>
          <Card.Text>
              <a href='https://www.linkedin.com/in/damianpoclitar/' target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
          </Card.Text>
          <a href='https://github.com/damipoc' target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
        </Card.Body>
      </Card>

      <Card style={{ width: '20rem' }} >
        <Card.Img variant="top" src="holder.js/100px180" alt=""/>
        <Card.Body>
          <Card.Title>Jariful Hoque</Card.Title>
          <Card.Text>
            <h6>Contact Details</h6>
              <a><Button variant="primary">Email</Button></a> 
          </Card.Text>
          <Card.Text>
              <a href='https://www.linkedin.com/in/jarif-hoque/' target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
          </Card.Text>
          <a href='https://github.com/jarifulhoque' target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
        </Card.Body>
      </Card>

      <Card style={{ width: '20rem' }} >
        <Card.Img variant="top" src="holder.js/100px180" alt=""/>
        <Card.Body>
          <Card.Title>Kya Edmeade</Card.Title>
          <Card.Text>
            <h6>Contact Details</h6>
              <a><Button variant="primary">Email</Button></a> 
          </Card.Text>
          <Card.Text>
              <a href='https://www.linkedin.com/in/kya-edmeade/' target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
          </Card.Text>
          <a href='https://github.com/K-Edmeade' target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
        </Card.Body>
      </Card>
  </CardGroup>

  <CardGroup>
  <Card style={{ width: '20rem' }} >
        <Card.Img variant="top" src="holder.js/100px180" alt=""/>
        <Card.Body>
          <Card.Title>Tashfeen Arshad</Card.Title>
          <Card.Text>
            <h6>Contact Details</h6>
              <a><Button variant="primary">Email</Button></a> 
          </Card.Text>
          <Card.Text>
              <a href=''target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
          </Card.Text>
          <a href='https://github.com/tashfeenarshad'target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
        </Card.Body>
      </Card>

      <Card style={{ width: '20rem' }} >
        <Card.Img variant="top" src="holder.js/100px180" alt=""/>
        <Card.Body>
          <Card.Title>Syed Zaidi</Card.Title>
          <Card.Text>
            <h6>Contact Details</h6>
              <a><Button variant="primary">Email</Button></a> 
          </Card.Text>
          <Card.Text>
              <a href='https://www.linkedin.com/in/syed-namvar-zaidi/' target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
          </Card.Text>
          <a href='https://github.com/namvarzaidi' target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
        </Card.Body>
      </Card>
      
  </CardGroup>

  <Card style={{ width: '70em' }} >
        <Card.Img variant="top" src="holder.js/100px180" alt=""/>
        <Card.Body>
          <Card.Title>Scrum</Card.Title>
          <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut illo eaque perferendis sequi recusandae debitis excepturi amet! Harum similique illum veniam ratione eius. Excepturi nesciunt culpa placeat repellendus rem!
          </Card.Text>
          <a href='' target="_blank" rel="noopener noreferrer"><Button variant="primary">Scrum.org</Button></a>
        </Card.Body>
    </Card>


    </>);}
  export default About;