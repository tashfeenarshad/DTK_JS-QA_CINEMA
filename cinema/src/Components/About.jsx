import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function About() {
    return (
  <>
    <h1>About</h1>
    

  
      <Card style={{ width: '50rem' }} >
        <Card.Img variant="top" src="holder.js/100px180" alt=""/>
        <Card.Body>
          <Card.Title>Damian Poclitar</Card.Title>
          <Card.Text>
            <h6>Contact Details</h6>
              <a href='/contact' target="_blank" rel="noopener noreferrer"><Button variant="primary">Email</Button></a> 
          </Card.Text>
          <Card.Text>
              <a href='https://www.linkedin.com/in/damianpoclitar/' target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
          </Card.Text>
          <a href='https://github.com/damipoc' target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
        </Card.Body>
      </Card>

      <Card style={{ width: '50rem' }} >
        <Card.Img variant="top" src="holder.js/100px180" alt=""/>
        <Card.Body>
          <Card.Title>Jariful Hoque</Card.Title>
          <Card.Text>
            <h6>Contact Details</h6>
              <a href='/contact' target="_blank" rel="noopener noreferrer"><Button variant="primary">Email</Button></a> 
          </Card.Text>
          <Card.Text>
              <a href='https://www.linkedin.com/in/jarif-hoque/' target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
          </Card.Text>
          <a href='https://github.com/jarifulhoque' target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
        </Card.Body>
      </Card>

      <Card style={{ width: '50rem' }} >
        <Card.Img variant="top" src="holder.js/100px180" alt=""/>
        <Card.Body>
          <Card.Title>Kya Edmeade</Card.Title>
          <Card.Text>
            <h6>Contact Details</h6>
              <a href='/contact' target="_blank" rel="noopener noreferrer"><Button variant="primary">Email</Button></a> 
          </Card.Text>
          <Card.Text>
              <a href='https://www.linkedin.com/in/kya-edmeade/' target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
          </Card.Text>
          <a href='https://github.com/K-Edmeade' target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
        </Card.Body>
      </Card>
  

  
  <Card style={{ width: '50rem' }} >
        <Card.Img variant="top" src="holder.js/100px180" alt=""/>
        <Card.Body>
          <Card.Title>Tashfeen Arshad</Card.Title>
          <Card.Text>
            <h6>Contact Details</h6>
              <a href='/contact' target="_blank" rel="noopener noreferrer"><Button variant="primary">Email</Button></a> 
          </Card.Text>
          <Card.Text>
              <a href=''target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
          </Card.Text>
          <a href='https://github.com/tashfeenarshad'target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
        </Card.Body>
      </Card>

      <Card style={{ width: '50rem' }} >
        <Card.Img variant="top" src="holder.js/100px180" alt=""/>
        <Card.Body>
          <Card.Title>Syed Zaidi</Card.Title>
          <Card.Text>
            <h6>Contact Details</h6>
              <a href='/contact' target="_blank" rel="noopener noreferrer"><Button variant="primary">Email</Button></a> 
          </Card.Text>
          <Card.Text>
              <a href='https://www.linkedin.com/in/syed-namvar-zaidi/' target="_blank" rel="noopener noreferrer"><Button variant="primary">LinkedIn</Button></a>
          </Card.Text>
          <a href='https://github.com/namvarzaidi' target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub</Button></a>
        </Card.Body>
      </Card>
      
  

  <Card style={{ width: '50em' }} >
        <Card.Img variant="top" src="holder.js/100px180" alt=""/>
        <Card.Body>
          <Card.Title><center>Scrum</center></Card.Title>
          <Card.Text>

          <p>Scrum is a framework for project management that emphasizes teamwork, accountability and iterative progress toward a well-defined goal. The framework begins with a simple premise: Start with what can be seen or known. After that, track the progress and tweak, as necessary.</p>

          <p>Scrum helps people and teams deliver value incrementally in a collaborative manner. Scrums are broken down into a series of iterations known as sprints. 
              A sprint can last as long as is necessary anywhere between one to four weeks, with each sprint aiming to deliver functioning components of the final product that could be published. </p>
           
          <p>Within sprints, user stores are created to track the creation of individual components. User stories are three line stories told from the perspective of the individual which outline the needs. User stories are prioritised so each team member knows where to focus their time.  </p>

          <p>The team made use of scrum methodology, as well a kanban board to create and track the user stories and tasks required for the building of this site. With each componet borken down into an idinviidual task it helped streamline and focus the process, such that components were built in tandem rather than sequentially.</p>

              
          </Card.Text>
          <a href='https://www.scrum.org/' target="_blank" rel="noopener noreferrer"><center><Button variant="primary">Find out more</Button></center></a>
        </Card.Body>
    </Card>


    </>);}
  export default About;