import Nav from 'react-bootstrap/Nav';

function Footer(){
    return(
        <div id="footer" style={{backgroundColor: "#1DC690", color: "#1C4670", fontWeight: 'bold'}}>
        <Nav className="justify-content-center" activeKey="/" >
            <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/about">About Us</Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
    );
}

export default Footer;